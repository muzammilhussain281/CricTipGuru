// ===== CRICKET MATCHES DATA =====
const cricketMatches = [
    {
        id: 1,
        title: "India vs Australia",
        time: "Today, 2:30 PM",
        venue: "MCG, Melbourne",
        status: "upcoming",
        prediction: "INDIA TO WIN",
        probability: 68,
        confidence: "High",
        details: {
            betting: {
                team1: { name: "India", odds: 1.65 },
                team2: { name: "Australia", odds: 2.20 },
                draw: { name: "Draw/Tie", odds: 15.00 }
            },
            squad: {
                team1: ["Rohit Sharma (c)", "Virat Kohli", "KL Rahul", "Suryakumar Yadav", "Hardik Pandya", "Ravindra Jadeja", "Rishabh Pant", "Jasprit Bumrah", "Mohammed Shami", "Mohammed Siraj", "Kuldeep Yadav"],
                team2: ["Pat Cummins (c)", "David Warner", "Steve Smith", "Marnus Labuschagne", "Travis Head", "Glenn Maxwell", "Alex Carey", "Mitchell Starc", "Josh Hazlewood", "Nathan Lyon", "Adam Zampa"]
            },
            pitch: {
                type: "Batting Friendly",
                averageScore: 320,
                highestScore: "400/5",
                lowestScore: "120/10",
                tossAdvice: "Bat first"
            },
            weather: {
                temperature: "22°C",
                rainChance: "10%",
                humidity: "65%",
                wind: "18 km/h",
                condition: "Clear skies"
            },
            head2head: {
                totalMatches: 142,
                team1Wins: 56,
                team2Wins: 78,
                draws: 8,
                lastMeeting: "IND won by 5 wickets"
            },
            bettingTip: "India's strong batting lineup and spin-friendly conditions give them the edge. Bet on India to win with odds 1.65."
        }
    },
    {
        id: 2,
        title: "England vs Pakistan",
        time: "Today, 7:30 PM",
        venue: "Lord's, London",
        status: "upcoming",
        prediction: "ENGLAND TO WIN",
        probability: 55,
        confidence: "Medium",
        details: {
            betting: {
                team1: { name: "England", odds: 1.80 },
                team2: { name: "Pakistan", odds: 2.00 },
                draw: { name: "Draw/Tie", odds: 12.00 }
            },
            squad: {
                team1: ["Jos Buttler (c)", "Jonny Bairstow", "Joe Root", "Ben Stokes", "Harry Brook", "Moeen Ali", "Chris Woakes", "Mark Wood", "Adil Rashid", "Jofra Archer", "Reece Topley"],
                team2: ["Babar Azam (c)", "Mohammad Rizwan", "Fakhar Zaman", "Iftikhar Ahmed", "Shadab Khan", "Mohammad Nawaz", "Shaheen Afridi", "Haris Rauf", "Naseem Shah", "Mohammad Wasim", "Usama Mir"]
            },
            pitch: {
                type: "Balanced",
                averageScore: 280,
                highestScore: "334/4",
                lowestScore: "107/10",
                tossAdvice: "Bat first"
            },
            weather: {
                temperature: "18°C",
                rainChance: "30%",
                humidity: "75%",
                wind: "12 km/h",
                condition: "Partly cloudy"
            },
            head2head: {
                totalMatches: 88,
                team1Wins: 54,
                team2Wins: 32,
                draws: 2,
                lastMeeting: "ENG won by 74 runs"
            },
            bettingTip: "England at home with conditions in their favor. England to win at 1.80."
        }
    },
    {
        id: 3,
        title: "MI vs CSK",
        time: "LIVE",
        venue: "Wankhede, Mumbai",
        status: "live",
        prediction: "CSK TO WIN",
        probability: 60,
        confidence: "Medium",
        details: {
            betting: {
                team1: { name: "MI", odds: 1.90 },
                team2: { name: "CSK", odds: 1.85 },
                draw: { name: "Tie", odds: 8.00 }
            },
            squad: {
                team1: ["Rohit Sharma (c)", "Ishan Kishan", "Suryakumar Yadav", "Tilak Varma", "Tim David", "Jasprit Bumrah", "Piyush Chawla", "Jason Behrendorff", "Kumar Kartikeya", "Akash Madhwal", "Nehal Wadhera"],
                team2: ["MS Dhoni (c)", "Ruturaj Gaikwad", "Devon Conway", "Shivam Dube", "Ravindra Jadeja", "Moeen Ali", "Deepak Chahar", "Maheesh Theekshana", "Matheesha Pathirana", "Tushar Deshpande", "Simarjeet Singh"]
            },
            pitch: {
                type: "Batting Paradise",
                averageScore: 185,
                highestScore: "235/9",
                lowestScore: "87/10",
                tossAdvice: "Chase (dew factor)"
            },
            weather: {
                temperature: "28°C",
                rainChance: "5%",
                humidity: "80%",
                wind: "8 km/h",
                condition: "Clear night"
            },
            head2head: {
                totalMatches: 36,
                team1Wins: 20,
                team2Wins: 16,
                draws: 0,
                lastMeeting: "CSK won by 7 wickets"
            },
            bettingTip: "CSK with better death bowling. CSK to win at 1.85."
        }
    },
    {
        id: 4,
        title: "South Africa vs New Zealand",
        time: "Tomorrow, 1:00 PM",
        venue: "Centurion Park",
        status: "upcoming",
        prediction: "SOUTH AFRICA TO WIN",
        probability: 72,
        confidence: "High",
        details: {
            betting: {
                team1: { name: "South Africa", odds: 1.50 },
                team2: { name: "New Zealand", odds: 2.60 },
                draw: { name: "Draw/Tie", odds: 18.00 }
            },
            squad: {
                team1: ["Temba Bavuma (c)", "Quinton de Kock", "Rassie van der Dussen", "Aiden Markram", "David Miller", "Heinrich Klaasen", "Marco Jansen", "Kagiso Rabada", "Keshav Maharaj", "Lungi Ngidi", "Tabraiz Shamsi"],
                team2: ["Kane Williamson (c)", "Tom Latham", "Devon Conway", "Daryl Mitchell", "Glenn Phillips", "Mitchell Santner", "Ish Sodhi", "Tim Southee", "Trent Boult", "Lockie Ferguson", "Matt Henry"]
            },
            pitch: {
                type: "Fast & Bouncy",
                averageScore: 280,
                highestScore: "392/6",
                lowestScore: "95/10",
                tossAdvice: "Bowl first"
            },
            weather: {
                temperature: "25°C",
                rainChance: "15%",
                humidity: "55%",
                wind: "20 km/h",
                condition: "Sunny"
            },
            head2head: {
                totalMatches: 71,
                team1Wins: 35,
                team2Wins: 32,
                draws: 4,
                lastMeeting: "SA won by 8 wickets"
            },
            bettingTip: "South Africa's pace attack at home is lethal. South Africa to win at 1.50."
        }
    }
];

// ===== INITIALIZATION =====
// Run immediately when page loads
updateCurrentDate();
loadMatches();
setupEventListeners();
checkAdminAccess();

// ===== FUNCTIONS =====
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
}

function loadMatches() {
    const container = document.getElementById('matchesContainer');
    
    if (cricketMatches.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--dark-gray);">
                <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 15px; color: var(--primary);"></i>
                <p>No matches today. Check back later!</p>
            </div>
        `;
        return;
    }
    
    let matchesHTML = '';
    
    cricketMatches.forEach(match => {
        const isExpanded = match.id === 1; // First match expanded by default
        
        matchesHTML += `
            <div class="match-card ${isExpanded ? 'expanded' : ''}" data-match-id="${match.id}">
                <!-- Match Header (Always Visible) -->
                <div class="match-header">
                    <div class="match-teams">
                        <h3>${match.title}</h3>
                        <div class="match-time">
                            <i class="far fa-clock"></i>
                            ${match.time} • ${match.venue}
                        </div>
                    </div>
                    <div class="match-status status-${match.status}">
                        ${match.status === 'live' ? 'LIVE' : 'UPCOMING'}
                    </div>
                </div>
                
                <!-- See More Button -->
                <div class="see-more-section">
                    <div>
                        <div class="prediction-text">${match.prediction}</div>
                        <div class="confidence">${match.probability}% Confidence</div>
                    </div>
                    <div class="see-more-btn">
                        <span>${isExpanded ? 'Hide Details' : 'See More'}</span>
                        <i class="fas fa-chevron-${isExpanded ? 'up' : 'down'}"></i>
                    </div>
                </div>
                
                <!-- Match Details (Hidden by Default) -->
                <div class="match-details">
                    <!-- 1. Betting Rates -->
                    <div class="detail-section">
                        <h3 class="section-title">
                            <i class="fas fa-coins"></i>
                            Betting Rates
                        </h3>
                        <div class="odds-container">
                            <div class="odd-item">
                                <div class="odd-team">${match.details.betting.team1.name}</div>
                                <div class="odd-value">${match.details.betting.team1.odds}</div>
                            </div>
                            <div class="odd-item">
                                <div class="odd-team">${match.details.betting.team2.name}</div>
                                <div class="odd-value">${match.details.betting.team2.odds}</div>
                            </div>
                            ${match.details.betting.draw ? `
                            <div class="odd-item">
                                <div class="odd-team">${match.details.betting.draw.name}</div>
                                <div class="odd-value">${match.details.betting.draw.odds}</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <!-- 2. Squad -->
                    <div class="detail-section">
                        <h3 class="section-title">
                            <i class="fas fa-users"></i>
                            Playing XI
                        </h3>
                        <div class="squad-container">
                            <div class="team-squad">
                                <h4>${match.title.split(' vs ')[0]}</h4>
                                <ul class="player-list">
                                    ${match.details.squad.team1.map(player => `<li>${player}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="team-squad">
                                <h4>${match.title.split(' vs ')[1]}</h4>
                                <ul class="player-list">
                                    ${match.details.squad.team2.map(player => `<li>${player}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 3. Pitch Report -->
                    <div class="detail-section">
                        <h3 class="section-title">
                            <i class="fas fa-baseball-ball"></i>
                            Pitch Report
                        </h3>
                        <div class="info-box">
                            <div class="info-row">
                                <span class="info-label">Pitch Type</span>
                                <span class="info-value">${match.details.pitch.type}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Average Score</span>
                                <span class="info-value">${match.details.pitch.averageScore}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Highest Score</span>
                                <span class="info-value">${match.details.pitch.highestScore}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Toss Advice</span>
                                <span class="info-value">${match.details.pitch.tossAdvice}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 4. Weather -->
                    <div class="detail-section">
                        <h3 class="section-title">
                            <i class="fas fa-cloud-sun"></i>
                            Weather
                        </h3>
                        <div class="info-box">
                            <div class="info-row">
                                <span class="info-label">Temperature</span>
                                <span class="info-value">${match.details.weather.temperature}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Rain Chance</span>
                                <span class="info-value">${match.details.weather.rainChance}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Humidity</span>
                                <span class="info-value">${match.details.weather.humidity}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Wind Speed</span>
                                <span class="info-value">${match.details.weather.wind}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 5. Head to Head -->
                    <div class="detail-section">
                        <h3 class="section-title">
                            <i class="fas fa-trophy"></i>
                            Head to Head
                        </h3>
                        <div class="head2head-container">
                            <div class="stats-row">
                                <span>Total Matches</span>
                                <span class="stat-value">${match.details.head2head.totalMatches}</span>
                            </div>
                            <div class="stats-row">
                                <span>${match.title.split(' vs ')[0]} Wins</span>
                                <span class="stat-value" style="color: var(--primary);">${match.details.head2head.team1Wins}</span>
                            </div>
                            <div class="stats-row">
                                <span>${match.title.split(' vs ')[1]} Wins</span>
                                <span class="stat-value" style="color: var(--accent);">${match.details.head2head.team2Wins}</span>
                            </div>
                            <div class="stats-row">
                                <span>Last Meeting</span>
                                <span class="stat-value" style="color: var(--secondary);">${match.details.head2head.lastMeeting}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Betting Tip -->
                    <div class="betting-tip">
                        <h4><i class="fas fa-lightbulb"></i> Expert Betting Tip</h4>
                        <p>${match.details.bettingTip}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = matchesHTML;
    
    // Add click events to "See More" buttons
    document.querySelectorAll('.see-more-section').forEach(button => {
        button.addEventListener('click', function() {
            const matchCard = this.closest('.match-card');
            const isExpanded = matchCard.classList.contains('expanded');
            
            // Close all other cards
            if (!isExpanded) {
                document.querySelectorAll('.match-card.expanded').forEach(card => {
                    if (card !== matchCard) {
                        card.classList.remove('expanded');
                        const btn = card.querySelector('.see-more-btn');
                        btn.querySelector('span').textContent = 'See More';
                        btn.querySelector('i').className = 'fas fa-chevron-down';
                    }
                });
            }
            
            // Toggle current card
            matchCard.classList.toggle('expanded');
            
            // Update button text and icon
            const btn = this.querySelector('.see-more-btn');
            if (matchCard.classList.contains('expanded')) {
                btn.querySelector('span').textContent = 'Hide Details';
                btn.querySelector('i').className = 'fas fa-chevron-up';
            } else {
                btn.querySelector('span').textContent = 'See More';
                btn.querySelector('i').className = 'fas fa-chevron-down';
            }
        });
    });
}

function setupEventListeners() {
    // Admin button
    document.getElementById('adminBtn')?.addEventListener('click', showAdminPanel);
    document.getElementById('closeAdmin')?.addEventListener('click', hideAdminPanel);
    
    // Add match button
    document.getElementById('addMatchBtn')?.addEventListener('click', addNewMatch);
    
    // Close admin panel when clicking outside
    document.getElementById('adminPanel')?.addEventListener('click', function(e) {
        if (e.target === this) {
            hideAdminPanel();
        }
    });
}

function checkAdminAccess() {
    // Check URL for admin access
    const urlParams = new URLSearchParams(window.location.search);
    const adminKey = urlParams.get('admin');
    
    if (adminKey === 'cricket123') {
        showAdminButton();
    }
}

function showAdminButton() {
    const adminBtn = document.getElementById('adminBtn');
    if (adminBtn) {
        adminBtn.style.display = 'flex';
    }
}

function showAdminPanel() {
    document.getElementById('adminPanel').classList.add('active');
}

function hideAdminPanel() {
    document.getElementById('adminPanel').classList.remove('active');
}

function addNewMatch() {
    const title = document.getElementById('matchTitle').value.trim();
    const time = document.getElementById('matchTime').value.trim();
    const prediction = document.getElementById('matchPrediction').value.trim();
    const probability = document.getElementById('matchProbability').value.trim();
    const bettingTip = document.getElementById('bettingTip').value.trim();
    
    if (!title || !time || !prediction || !probability) {
        showToast('Please fill all required fields', 'error');
        return;
    }
    
    // Create new match object
    const newMatch = {
        id: cricketMatches.length + 1,
        title: title,
        time: time,
        venue: "TBD",
        status: "upcoming",
        prediction: prediction.toUpperCase(),
        probability: parseInt(probability),
        confidence: probability >= 70 ? "High" : probability >= 55 ? "Medium" : "Low",
        details: {
            betting: {
                team1: { name: title.split(' vs ')[0] || "Team 1", odds: 1.80 },
                team2: { name: title.split(' vs ')[1] || "Team 2", odds: 2.00 },
                draw: { name: "Draw/Tie", odds: 12.00 }
            },
            squad: {
                team1: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11"],
                team2: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11"]
            },
            pitch: {
                type: "Standard",
                averageScore: 280,
                highestScore: "350/5",
                lowestScore: "120/10",
                tossAdvice: "Bat first"
            },
            weather: {
                temperature: "25°C",
                rainChance: "20%",
                humidity: "60%",
                wind: "15 km/h",
                condition: "Partly cloudy"
            },
            head2head: {
                totalMatches: 50,
                team1Wins: 25,
                team2Wins: 22,
                draws: 3,
                lastMeeting: "Match canceled"
            },
            bettingTip: bettingTip || "No betting tip provided."
        }
    };
    
    // Add to matches array
    cricketMatches.push(newMatch);
    
    // Reload matches
    loadMatches();
    
    // Clear form
    document.getElementById('matchTitle').value = '';
    document.getElementById('matchTime').value = '';
    document.getElementById('matchPrediction').value = '';
    document.getElementById('matchProbability').value = '';
    document.getElementById('bettingTip').value = '';
    
    // Hide admin panel
    hideAdminPanel();
    
    showToast('Match added successfully!', 'success');
}

function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        document.body.removeChild(existingToast);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Style based on type
    const bgColor = type === 'error' ? '#ef4444' : 
                   type === 'success' ? '#10b981' : '#1e293b';
    
    toast.style.background = bgColor;
    
    document.body.appendChild(toast);
    
    // Fade in
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}