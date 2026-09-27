import React from 'react';
import Sidebar from '../layout/Sidebar';
import '../styles/Dashboard.css'; 

export default function DashboardLayout() {
  return (<div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        
        {/* Welcome Header */}
        <div className="welcome-header">
          <h1>Assalamu Alaikum, Welcome Back</h1>
          <p>Continue your spiritual journey preparation</p>
        </div>

        {/* Quote Banner */}
        <div className="quote-banner">
          <div className="quote-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="quote-content">
            <span className="quote-tag">Quran & Sunnah</span>
            <p className="quote-text">"And Allah is with those who fear Him and those who are doers of good."</p>
          </div>
        </div>

        {/* Stats Cards Grid (4-ta kaar ee sare) */}
        <div className="stats-grid">
          <div className="stats-card">
            <div className="stats-info">
              <h3>Active Journeys</h3>
              <p className="stats-value">3</p>
            </div>
            <div className="stats-icon blue">
              <i className="fas fa-calendar-alt"></i>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-info">
              <h3>Progress</h3>
              <p className="stats-value">50%</p>
            </div>
            <div className="stats-icon orange">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-info">
              <h3>Completed Tasks</h3>
              <p className="stats-value">8</p>
            </div>
            <div className="stats-icon green">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-info">
              <h3>Total Tasks</h3>
              <p className="stats-value">16</p>
            </div>
            <div className="stats-icon yellow">
              <i className="fas fa-book"></i>
            </div>
          </div>
        </div>

        {/* Main Grid (Current Journey & Journey Stages) */}
        <div className="dashboard-grid">
          <div className="current-journey-card">
            <div className="card-header-flex">
              <div className="card-title-box">
                <i className="fas fa-compass"></i>
                <span>Current Journey</span>
              </div>
              <span className="view-details-link">View Details</span>
            </div>
            <div className="journey-main-info">
              <h3>Umrah 2026 - Spring</h3>
              <p><i className="fas fa-kaaba"></i> Umrah Pilgrimage</p>
            </div>
            <div className="progress-section">
              <div className="progress-labels">
                <span>Overall Progress</span>
                <span>50%</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="journey-dates">
              <div><i className="fas fa-calendar-plus"></i> Start: 3/14/2024</div>
              <div><i className="fas fa-calendar-check"></i> End: 3/21/2024</div>
            </div>
          </div>

          <div className="journey-stages-card">
            <div className="card-header-flex">
              <div className="card-title-box">
                <i className="fas fa-layer-group"></i>
                <span>Journey Stages</span>
              </div>
              <span className="stages-count">5 Stages</span>
            </div>
            
            <div className="stages-list">
              <div className="stage-item">
                <div className="stage-info-top">
                  <span className="stage-badge green-badge">1</span>
                  <h4>Travel & Arrival</h4>
                  <span className="stage-status">In Progress</span>
                </div>
                <p>2 of 4 tasks completed</p>
                <div className="mini-progress-bar">
                  <div className="mini-fill" style={{ width: '50%' }}></div>
                </div>
              </div>


          <div className="stage-item">
                <div className="stage-info-top">
                  <span className="stage-badge green-badge">2</span>
                  <h4>Miqat</h4>
                  <span className="stage-status">In Progress</span>
                </div>
                <p>1 of 4 tasks completed</p>
                <div className="mini-progress-bar">
                  <div className="mini-fill" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
<section className="bottom-cards-grid">
  <div className="bottom-card prayer-card">
    <h3>Daily Prayers</h3>
    <p>Track your daily prayers.</p>
  </div>

  <div className="bottom-card quran-card">
    <h3>Quran Study</h3>
    <p>Read and reflect on Quran verses.</p>
  </div>

  <div className="bottom-card community-card">
    <h3>Community</h3>
    <p>Connect with fellow pilgrims.</p>
  </div>
  </section>
  </main>
  </div>
  );
  }