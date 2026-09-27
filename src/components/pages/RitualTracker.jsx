import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RitualTracker.css";

const initialStages = [
  {
    id: "travel",
    title: "Travel & Arrival",
    description: "Prepare for departure and arrive safely in the Holy Land",
    type: "Travel",
    tasks: [
      {
        id: 1,
        title: "Pack Ihram clothing",
        type: "Mandatory",
        completed: true,
      },
      {
        id: 2,
        title: "Obtain necessary documents",
        type: "Mandatory",
        completed: false,
      },
      {
        id: 3,
        title: "Make travel dua",
        type: "Sunnah",
        completed: false,
      },
      {
        id: 4,
        title: "Pack prayer mat and Quran",
        type: "Preparation",
        completed: true,
      },
    ],
  },
  {
    id: "miqat",
    title: "Miqat",
    description: "Enter the state of Ihram at the designated boundary",
    type: "Miqat",
    tasks: [
      {
        id: 5,
        title: "Perform Ghusl (ritual bath)",
        type: "Sunnah",
        completed: false,
      },
      {
        id: 6,
        title: "Wear Ihram clothing",
        type: "Mandatory",
        completed: false,
      },
      {
        id: 7,
        title: "Declare intention (Niyyah)",
        type: "Mandatory",
        completed: false,
      },
      {
        id: 8,
        title: "Recite Talbiyah",
        type: "Mandatory",
        completed: true,
      },
    ],
  },
  {
    id: "tawaf",
    title: "Tawaf",
    description: "Circumambulate the Kaaba seven times",
    type: "Tawaf",
    tasks: [
      {
        id: 9,
        title: "Kiss or point to Hajar al-Aswad",
        type: "Sunnah",
        completed: false,
      },
      {
        id: 10,
        title: "Complete 7 circuits counter-clockwise",
        type: "Mandatory",
        completed: true,
      },
      {
        id: 11,
        title: "Perform 2 Rakah at Maqam Ibrahim",
        type: "Mandatory",
        completed: true,
      },
      {
        id: 12,
        title: "Make dua during Tawaf",
        type: "Sunnah",
        completed: true,
      },
    ],
  },
  {
    id: "sai",
    title: "Sa'i",
    description: "Walk between Safa and Marwah hills seven times",
    type: "Sa'i",
    tasks: [
      {
        id: 13,
        title: "Start at Mount Safa",
        type: "Mandatory",
        completed: false,
      },
      {
        id: 14,
        title: "Complete 7 trips between Safa and Marwah",
        type: "Mandatory",
        completed: true,
      },
      {
        id: 15,
        title: "Make dua at both hills",
        type: "Sunnah",
        completed: true,
      },
      {
        id: 16,
        title: "Drink Zamzam water",
        type: "Sunnah",
        completed: false,
      },
    ],
  },
];

const typeLabels = {
  Mandatory: "★ Mandatory",
  Sunnah: "☆ Sunnah",
  Preparation: "○ Preparation",
};

function getProgress(tasks) {
  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;

  return {
    completed,
    total,
    percentage: Math.round((completed / total) * 100),
  };
}

export default function RitualTracker() {
  const [stages, setStages] = useState(initialStages);
  const [stageFilter, setStageFilter] = useState("All Stages");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const toggleTask = (stageId, taskId) => {
    setStages((currentStages) =>
      currentStages.map((stage) => {
        if (stage.id !== stageId) return stage;

        return {
          ...stage,
          tasks: stage.tasks.map((task) =>
            task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
      })
    );
  };

  const visibleStages = useMemo(() => {
    return stages
      .filter(
        (stage) =>
          stageFilter === "All Stages" || stage.title === stageFilter
      )
      .map((stage) => ({
        ...stage,
        tasks:
          typeFilter === "All Types"
            ? stage.tasks
            : stage.tasks.filter((task) => task.type === typeFilter),
      }))
      .filter((stage) => stage.tasks.length > 0);
  }, [stages, stageFilter, typeFilter]);

  return (
    <div className="ritual-page">
      <div className="ritual-dashboard">
        {/* Sidebar */}
        <aside className="ritual-sidebar">
          <div>
            <div className="ritual-brand">
              <div className="brand-mark">✓</div>
              <div>
                <strong>Ziyaarah</strong>
                <span>Journey Planner</span>
              </div>
            </div>

            <nav className="ritual-nav">
              <Link to="/dashboard">
                <span>⌂</span>
                Dashboard
              </Link>

              <Link to="/trip-planner">
                <span>▣</span>
                Trip Planner
              </Link>

              <Link to="/ritual-tracker" className="active">
                <span>✓</span>
                Ritual Tracker
              </Link>

              <Link to="/resources">
                <span>▤</span>
                Resources
              </Link>
            </nav>
          </div>

          <div className="ritual-sidebar-bottom">
            <div className="profile">
              <div className="profile-avatar">A</div>

              <div>
                <strong>amina</strong>
                <span>amina@gmail.com</span>
              </div>
            </div>

            <button className="logout-button">
              <span>↪️</span>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="ritual-content">
          <header className="ritual-header">
            <h1>Ritual Tracker</h1>
            <p>Track your spiritual obligations and sunnah practices</p>
          </header>

          <section className="trip-banner">
            <h2>Umrah 2026- Spring</h2>
            <p>Umrah Pilgrimage</p>
          </section>

          {/* Filters */}
          <section className="ritual-filters">
            <label>
              <span>⌄ Filter by Stage</span>

              <select
                value={stageFilter}
                onChange={(event) => setStageFilter(event.target.value)}
              >
                <option>All Stages</option>
                <option>Travel & Arrival</option>
                <option>Miqat</option>
                <option>Tawaf</option>
                <option>Sa'i</option>
              </select>
            </label>

            <label>
              <span>⌄ Filter by Type</span>

              <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
              >
                <option>All Types</option>
                <option>Mandatory</option>
                <option>Sunnah</option>
                <option>Preparation</option>
              </select>
            </label>
          </section>

          {/* Stages */}
          <section className="stages">
            {visibleStages.map((stage) => {
              const progress = getProgress(stage.tasks);

              return (
                <article className="stage-card" key={stage.id}>
                  <div className="stage-header">
                    <div className="stage-title">
                      <span className="stage-circle" />

                      <div>
                        <h2>{stage.title}</h2>
                        <p>{stage.description}</p>
                      </div>
                    </div>

                    <strong>
                      {progress.completed}/{progress.total} (
                      {progress.percentage}%)
                    </strong>
                  </div>

                  <div className="progress-area">
                    <span>Progress</span>

                    <div className="progress-track">
                      <div
                        className="progress-bar"
                        style={{ width: `${progress.percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="task-list">
                    {stage.tasks.map((task) => (
                      <button
                        type="button"
                        key={task.id}
                        className={`task ${
                          task.completed ? "completed" : ""
                        }`}
                        onClick={() => toggleTask(stage.id, task.id)}
                      >
                        <span
                          className={`task-check ${
                            task.completed ? "checked" : ""
                          }`}
                        >
                          {task.completed ? "✓" : ""}
                        </span>

                        <span className="task-title">
                          {task.title}
                        </span>

                        <span
                          className={`task-type task-${task.type.toLowerCase()}`}
                        >
                          {typeLabels[task.type]}
                        </span>
                      </button>
                    ))}
                  </div>
                </article>
              );
            })}
          </section>

          {/* Legend */}
          <section className="ritual-legend">
            <h2>Ritual Types</h2>

            <div className="legend-items">
              <div>
                <span className="legend-icon mandatory">★</span>
                <div>
                  <strong>Mandatory (Fard)</strong>
                  <p>Required religious obligations</p>
                </div>
              </div>

              <div>
                <span className="legend-icon sunnah">☆</span>
                <div>
                  <strong>Sunnah</strong>
                  <p>Recommended practices</p>
                </div>
              </div>

              <div>
                <span className="legend-icon preparation">○</span>
                <div>
                  <strong>Preparation</strong>
                  <p>Planning and logistics</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}