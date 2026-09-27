import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TripPlanner.css";

const initialJourneys = [
  {
    id: 1,
    title: "Umrah 2026 - Spring",
    type: "Umrah",
    startDate: "3/14/2026",
    endDate: "3/21/2026",
    stages: 4,
    progress: 50,
    active: true,
    stageNames: ["Travel & Arrival", "Miqat", "Tawaf", "Sa'i"],
  },
  {
    id: 2,
    title: "Hajj 2026 - Sacred Journey",
    type: "Hajj",
    startDate: "6/13/2026",
    endDate: "6/20/2026",
    stages: 7,
    progress: 36,
    active: false,
    stageNames: [
      "Travel & Arrival",
      "Miqat",
      "Tawaf",
      "Sa'i",
      "+3 more",
    ],
  },
  {
    id: 3,
    title: "Family Umrah - December",
    type: "Umrah",
    startDate: "12/19/2026",
    endDate: "12/26/2026",
    stages: 4,
    progress: 0,
    active: false,
    stageNames: ["Travel & Arrival", "Miqat", "Tawaf", "Sa'i"],
  },
];

export default function TripPlanner() {
  const [journeys, setJourneys] = useState(initialJourneys);

  const createJourney = () => {
    const name = window.prompt("Enter a name for your new journey:");

    if (!name || !name.trim()) return;

    const newJourney = {
      id: Date.now(),
      title: name.trim(),
      type: "Umrah",
      startDate: "Not set",
      endDate: "Not set",
      stages: 4,
      progress: 0,
      active: false,
      stageNames: ["Travel & Arrival", "Miqat", "Tawaf", "Sa'i"],
    };

    setJourneys((current) => [...current, newJourney]);
  };

  return (
    <div className="trip-page">
      <div className="trip-dashboard">

        {/* SIDEBAR */}
        <aside className="trip-sidebar">

          <div>
            <div className="trip-brand">
              <div className="trip-brand-icon">
                ✧
              </div>

              <div>
                <strong>Ziyaarah</strong>
                <span>Journey Planner</span>
              </div>
            </div>

            <nav className="trip-nav">

              <Link to="/dashboard">
                <span className="nav-icon">⌂</span>
                Dashboard
              </Link>

              <Link to="/trips" className="active">
                <span className="nav-icon">▣</span>
                Trip Planner
              </Link>

              <Link to="/ritual-tracker">
                <span className="nav-icon">✓</span>
                Ritual Tracker
              </Link>

              <Link to="/resources">
                <span className="nav-icon">▤</span>
                Resources
              </Link>

            </nav>
          </div>

          <div className="trip-sidebar-bottom">

            <div className="trip-profile">
              <div className="trip-avatar">
                A
              </div>
            </div>

            <button className="trip-signout">
              <span>↪️</span>
              Sign Out
            </button>

          </div>

        </aside>

        {/* MAIN */}
        <main className="trip-content">

          <header className="trip-header">

            <div>
              <h1>Trip Planner</h1>
              <p>
                Plan and organize your spiritual journey
              </p>
            </div>

            <button
              className="new-journey-button"
              onClick={createJourney}
            >
              <span>+</span>
              New Journey
            </button>

          </header>

          {/* JOURNEYS */}
          <section className="journey-list">

            {journeys.map((journey) => (
              <article
                className={`journey-card ${
                  journey.active ? "journey-active" : ""
                }`}
                key={journey.id}
              >

                {/* TITLE ROW */}
                <div className="journey-title-row">

                  <div className="journey-title">

                    <span
                      className={`journey-status ${
                        journey.active ? "active" : ""
                      }`}
                    />

                    <h2>{journey.title}</h2>

                    <span className="journey-type">
                      {journey.type}
                    </span>

                  </div>

                  {journey.active && (
                    <span className="active-badge">
                      Active
                    </span>
                  )}

                </div>

                {/* DETAILS */}
                <div className="journey-details">

                  <div className="journey-detail">
                    <span className="detail-icon calendar">
                      □
                    </span>

                    <span>{journey.startDate}</span>
                  </div>

                  <div className="journey-detail">
                    <span className="detail-icon clock">
                      ◷
                    </span>

                    <span>{journey.endDate}</span>
                  </div>

                  <div className="journey-detail">
                    <span className="detail-icon stages-icon">
                      ♧
                    </span>

                    <span>
                      {journey.stages} stages
                    </span>
                  </div>

                  <div className="journey-detail">
                    <span className="detail-icon complete-icon">
                      ✓
                    </span>

                    <span>
                      {journey.progress}% complete
                    </span>
                  </div>

                </div>

                {/* PROGRESS */}
                <div className="journey-progress">

                  <div className="progress-label">
                    <span>Progress</span>
                    <strong>{journey.progress}%</strong>
                  </div>

                  <div className="journey-progress-track">
                    <div
                      className="journey-progress-bar"
                      style={{
  width: `${journey.progress}%`,
}}
              />
                  </div>

                </div>
              {/* STAGES */}
                <div className="journey-stages">

                  {journey.stageNames.map(
                    (stage, index) => (
                      <span
                        className="stage-badge"
                        key={`${journey.id}-${index}`}
                      >
                        {stage}
                      </span>
                    )
                  )}

                </div>

              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}