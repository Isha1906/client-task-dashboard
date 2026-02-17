"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./dashboard.css";

export default function Dashboard() {

  const [tasks, setTasks] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  // ✅ Check logged-in user first
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/";
        return;
      }

      setUserId(user.id);
      fetchTasks();
    };

    checkUser();
  }, []);

  // ✅ Fetch tasks
  const fetchTasks = async () => {

    let query = supabase.from("tasks").select("*");

    if (filter !== "All") {
      query = query.eq("status", filter);
    }

    const { data, error } = await query;

    if (!error) setTasks(data || []);
  };

  // refetch when filter changes
  useEffect(() => {
    if (userId) fetchTasks();
  }, [filter, userId]);

  // ✅ Add task (SAFE VERSION)
  const addTask = async () => {

    if (!title || !userId) return;

    const { error } = await supabase.from("tasks").insert({
      title: title,
      assigned_to: userId,
      priority: "Medium",
      status: "Pending"
    });

    if (error) {
      alert(error.message);
      return;
    }

    setTitle("");
    fetchTasks();
  };

  // ✅ Update status safely
  const updateStatus = async (id: string, status: string) => {

    const { error } = await supabase
      .from("tasks")
      .update({ status })
      .eq("id", id);

    if (!error) fetchTasks();
  };

  return (
    <div className="page">

      <div className="card">

        <div className="header">
          <h2>Client Task Dashboard</h2>

          <button
            className="logout"
            onClick={async ()=>{
              await supabase.auth.signOut();
              window.location.href="/";
            }}
          >
            Logout
          </button>
        </div>

        <div className="inputRow">
          <input
            placeholder="New task title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="filters">
          {["All","Pending","In Progress","Completed"].map(s=>(
            <button key={s} onClick={()=>setFilter(s)}>
              {s}
            </button>
          ))}
        </div>

        <div>
          {tasks.map((t)=>(
            <div key={t.id} className="task">

              <div>
                <div className="taskTitle">{t.title}</div>

                <div className="priority">
                  Priority:
                  <span className={`badge ${
                    t.priority === "High"
                      ? "high"
                      : t.priority === "Low"
                      ? "low"
                      : "medium"
                  }`}>
                    {t.priority}
                  </span>
                </div>

              </div>

              <select
                value={t.status}
                onChange={(e)=>updateStatus(t.id,e.target.value)}
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
