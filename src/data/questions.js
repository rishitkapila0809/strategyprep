/**
 * ==============================================================================
 * CENTRAL QUESTION BANK: Strategy and Technology: A Practical Primer (2026)
 * ==============================================================================
 * 
 * HOW TO MAINTAIN & EXTEND THIS QUESTION BANK:
 * --------------------------------------------
 * 1. Adding a new question:
 *    Simply append a new object to the `questions` array below.
 *    Example:
 *    {
 *      id: 121,
 *      week: 12,
 *      topic: "Advanced Strategy & Technology",
 *      question: "What is the primary benefit of modular architecture?",
 *      options: [
 *        { id: "A", text: "Decreased flexibility" },
 *        { id: "B", text: "Rapid component innovation and upgradeability" },
 *        { id: "C", text: "Higher structural friction" },
 *        { id: "D", text: "Single point of failure" }
 *      ],
 *      correctAnswer: "B",
 *      explanation: ""
 *    }
 * 
 * 2. Editing options or questions:
 *    Modify the `question` string or text in the `options` array directly.
 * 
 * 3. Changing the correct answer:
 *    Set `correctAnswer` to the matching option letter ("A", "B", "C", or "D").
 *    Do NOT use an index number (0, 1, 2, 3).
 * 
 * NOTE: The application dynamically computes question counts, navigation grids,
 * week filters, progress, and results directly from this array. Any added questions
 * (e.g. ID 121, 122...) will immediately and seamlessly appear across all screens.
 * ==============================================================================
 */

export const questions = [
  // --- WEEK 1: Structural and Strategic Analysis ---
  {
    id: 1,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "A definition of Value Chain of a firm is:",
    options: [
      { id: "A", text: "The end-to-end collection of only the primary activities of the firm" },
      { id: "B", text: "The end-to-end collection of only the supportive activities of the firm" },
      { id: "C", text: "The end-to-end collection of all the primary and secondary activities of the firm" },
      { id: "D", text: "None of the above" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 2,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "Which of the following is an external threat for a typical company?",
    options: [
      { id: "A", text: "Aggressive actions of its competitors" },
      { id: "B", text: "Growth of the global economy" },
      { id: "C", text: "Capital induction from investors and shareholders" },
      { id: "D", text: "External talent wanting to enter the company" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 3,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "Which of the following is a conservative strategy?",
    options: [
      { id: "A", text: "Massive integration and diversification based on debt" },
      { id: "B", text: "Proactive capacity expansion based on debt" },
      { id: "C", text: "Aggressive market penetration based on huge marketing investments" },
      { id: "D", text: "Calibrated investments based on internal cash generations" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 4,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "Contemporary businesses are increasingly shaped by which of the following drivers?",
    options: [
      { id: "A", text: "Profitability, diversification, and efficiency" },
      { id: "B", text: "Globalization, innovation, and sustainability" },
      { id: "C", text: "Technology, finance, and operations" },
      { id: "D", text: "Growth, marketing, and productivity" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 5,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "An industry consisting of many small players with no dominant firm is typically categorized as a:",
    options: [
      { id: "A", text: "Monopoly industry" },
      { id: "B", text: "Fragmented industry" },
      { id: "C", text: "Growth industry" },
      { id: "D", text: "Global industry" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 6,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "Porter's contextual framework for competitive strategy emphasizes the role of:",
    options: [
      { id: "A", text: "Internal factors only" },
      { id: "B", text: "External factors only" },
      { id: "C", text: "Both internal and external factors" },
      { id: "D", text: "Historical factors only" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 7,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "Porter's Five Forces Model is primarily used to analyze:",
    options: [
      { id: "A", text: "Employee performance" },
      { id: "B", text: "Industry competitiveness" },
      { id: "C", text: "Financial performance" },
      { id: "D", text: "Organizational culture" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 8,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "Which of the following correctly matches a SWOT component with its description?",
    options: [
      { id: "A", text: "Strengths – Risks faced by a firm" },
      { id: "B", text: "Weaknesses – Capabilities that provide competitive advantage" },
      { id: "C", text: "Opportunities – Enable the company to grow its business" },
      { id: "D", text: "Threats – Opportunities available in the environment" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 9,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "The primary purpose of the TOWS Matrix is to help a firm:",
    options: [
      { id: "A", text: "Measure financial performance" },
      { id: "B", text: "Evaluate employee productivity" },
      { id: "C", text: "Identify strategic options it can pursue" },
      { id: "D", text: "Forecast industry growth" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 10,
    week: 1,
    topic: "Structural and Strategic Analysis",
    question: "SPACE Matrix stands for:",
    options: [
      { id: "A", text: "Strategic Planning and Competitive Evaluation Matrix" },
      { id: "B", text: "Strategic Position and Action Evaluation Matrix" },
      { id: "C", text: "Strategic Performance and Action Effectiveness Matrix" },
      { id: "D", text: "Strategic Position and Assessment Evaluation Matrix" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 2: Strategy Formulation ---
  {
    id: 11,
    week: 2,
    topic: "Strategy Formulation",
    question: "According to the strategic planning process, the VRIO framework should be applied:",
    options: [
      { id: "A", text: "Before the creation of a vision statement" },
      { id: "B", text: "After strategy formulation" },
      { id: "C", text: "After the creation of a vision statement but before strategy formulation" },
      { id: "D", text: "Only after strategy implementation" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 12,
    week: 2,
    topic: "Strategy Formulation",
    question: "The Nash Equilibrium is a decision-making theorem within:",
    options: [
      { id: "A", text: "SWOT Analysis" },
      { id: "B", text: "Game Theory" },
      { id: "C", text: "TOWS Analysis" },
      { id: "D", text: "SPACE Matrix" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 13,
    week: 2,
    topic: "Strategy Formulation",
    question: "One limitation of game theory in strategic analysis is its:",
    options: [
      { id: "A", text: "Inability to analyze competitive situations" },
      { id: "B", text: "Exclusive focus on financial performance" },
      { id: "C", text: "Two-player format of analysis" },
      { id: "D", text: "Dependence on macroeconomic factors" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 14,
    week: 2,
    topic: "Strategy Formulation",
    question: "The BCG Matrix is primarily used to represent a company's:",
    options: [
      { id: "A", text: "Organizational structure" },
      { id: "B", text: "Investment portfolio" },
      { id: "C", text: "Financial statements" },
      { id: "D", text: "Supply chain network" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 15,
    week: 2,
    topic: "Strategy Formulation",
    question: "The BCG Matrix assists corporations in:",
    options: [
      { id: "A", text: "Recruiting employees" },
      { id: "B", text: "Analyzing product lines or business units for prioritization and resource allocation" },
      { id: "C", text: "Conducting financial audits" },
      { id: "D", text: "Evaluating supplier relationships" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 16,
    week: 2,
    topic: "Strategy Formulation",
    question: "A company is evaluating expansion into a foreign market and examines differences in language, legal systems, physical distance, and income levels. Which framework is most appropriate for this analysis?",
    options: [
      { id: "A", text: "BCG Matrix" },
      { id: "B", text: "GE Matrix" },
      { id: "C", text: "VRIO Framework" },
      { id: "D", text: "CAGE Framework" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 17,
    week: 2,
    topic: "Strategy Formulation",
    question: "Which of the following strategies in the AAA Framework focuses on maximizing a firm's local relevance to boost revenues and market share?",
    options: [
      { id: "A", text: "Aggregation" },
      { id: "B", text: "Adaptation" },
      { id: "C", text: "Arbitrage" },
      { id: "D", text: "Diversification" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 18,
    week: 2,
    topic: "Strategy Formulation",
    question: "The terms \"Red Ocean\" and \"Blue Ocean\" were coined by:",
    options: [
      { id: "A", text: "Michael Porter and Henry Mintzberg" },
      { id: "B", text: "Chan Kim and Renée Mauborgne" },
      { id: "C", text: "Igor Ansoff and Peter Drucker" },
      { id: "D", text: "Pankaj Ghemawat and C. K. Prahalad" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 19,
    week: 2,
    topic: "Strategy Formulation",
    question: "According to the Three Horizons Framework, companies often experience declining growth because:",
    options: [
      { id: "A", text: "Competition disappears over time" },
      { id: "B", text: "Innovation gives way to inertia" },
      { id: "C", text: "Market size continuously decreases" },
      { id: "D", text: "Customer needs remain unchanged" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 20,
    week: 2,
    topic: "Strategy Formulation",
    question: "According to Kaplan and Norton, strategy maps are an important component of:",
    options: [
      { id: "A", text: "Porter's Five Forces Framework" },
      { id: "B", text: "Balanced Scorecard Methodology" },
      { id: "C", text: "Blue Ocean Strategy" },
      { id: "D", text: "BCG Matrix" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 3: Strategy Execution ---
  {
    id: 21,
    week: 3,
    topic: "Strategy Execution",
    question: "Which of the following is an example of an offensive tactic?",
    options: [
      { id: "A", text: "Structural barriers" },
      { id: "B", text: "Price Warriorship" },
      { id: "C", text: "Vision statement" },
      { id: "D", text: "Balanced Scorecard" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 22,
    week: 3,
    topic: "Strategy Execution",
    question: "Which of the following is identified as a defensive tactic?",
    options: [
      { id: "A", text: "Market Switching" },
      { id: "B", text: "Segmental Competition" },
      { id: "C", text: "Raise Structural Barriers" },
      { id: "D", text: "Price Warriorship" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 23,
    week: 3,
    topic: "Strategy Execution",
    question: "Which of the following is NOT identified as a component of conglomerate synergy?",
    options: [
      { id: "A", text: "Coordinated Strategies" },
      { id: "B", text: "Shared, Optimised Resources" },
      { id: "C", text: "Economies of Scale/Scope" },
      { id: "D", text: "Five Forces Analysis" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 24,
    week: 3,
    topic: "Strategy Execution",
    question: "Which of the following is an example of a corporate strategy?",
    options: [
      { id: "A", text: "Cost Leadership" },
      { id: "B", text: "Niche Positioning" },
      { id: "C", text: "Strategic Alliance" },
      { id: "D", text: "Operational Excellence" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 25,
    week: 3,
    topic: "Strategy Execution",
    question: "In the Strategy–Structure Change Matrix, a company with a flexible strategy but a rigid structure is categorized as a:",
    options: [
      { id: "A", text: "Leader" },
      { id: "B", text: "Seeker" },
      { id: "C", text: "Laggard" },
      { id: "D", text: "Loser" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 26,
    week: 3,
    topic: "Strategy Execution",
    question: "The 1980s in the evolution of strategic management are most closely associated with:",
    options: [
      { id: "A", text: "Liberalisation Era" },
      { id: "B", text: "Competitive Strategy Era" },
      { id: "C", text: "Digital Era" },
      { id: "D", text: "Transformation Era" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 27,
    week: 3,
    topic: "Strategy Execution",
    question: "Which of the following is NOT one of the five pillars of strategic execution?",
    options: [
      { id: "A", text: "Strategy Creation" },
      { id: "B", text: "Strategic Planning" },
      { id: "C", text: "Communication" },
      { id: "D", text: "Industry Attractiveness" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 28,
    week: 3,
    topic: "Strategy Execution",
    question: "Business strategy is primarily concerned with:",
    options: [
      { id: "A", text: "Managing day-to-day operations" },
      { id: "B", text: "Achieving competitive advantage in a business" },
      { id: "C", text: "Preparing financial statements" },
      { id: "D", text: "Recruiting employees" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 29,
    week: 3,
    topic: "Strategy Execution",
    question: "Which of the following can lead to strategy implementation failure?",
    options: [
      { id: "A", text: "Effective coordination of activities" },
      { id: "B", text: "Unanticipated major problems" },
      { id: "C", text: "Clear definition of implementation tasks" },
      { id: "D", text: "Adequate employee training" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 30,
    week: 3,
    topic: "Strategy Execution",
    question: "Differentiation is a business strategy that focuses on:",
    options: [
      { id: "A", text: "Offering unique products or services" },
      { id: "B", text: "Reducing the number of products offered" },
      { id: "C", text: "Increasing administrative efficiency" },
      { id: "D", text: "Expanding into unrelated businesses" }
    ],
    correctAnswer: "A",
    explanation: ""
  },

  // --- WEEK 4: Competitive Strategy ---
  {
    id: 31,
    week: 4,
    topic: "Competitive Strategy",
    question: "Which of the following is NOT one of Porter’s Five Forces?",
    options: [
      { id: "A", text: "Threat of new entrants" },
      { id: "B", text: "Bargaining power of suppliers" },
      { id: "C", text: "Intensity of industry rivalry" },
      { id: "D", text: "Technological capability of the firm" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 32,
    week: 4,
    topic: "Competitive Strategy",
    question: "Which of the following is one of Porter’s generic competitive strategies?",
    options: [
      { id: "A", text: "Market Penetration" },
      { id: "B", text: "Cost Leadership" },
      { id: "C", text: "Vertical Integration" },
      { id: "D", text: "Diversification" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 33,
    week: 4,
    topic: "Competitive Strategy",
    question: "According to Porter, which of the following is a key matter of enquiry in competitive strategy?",
    options: [
      { id: "A", text: "Industry and business definition" },
      { id: "B", text: "Budgeting" },
      { id: "C", text: "Forecasting" },
      { id: "D", text: "Planning" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 34,
    week: 4,
    topic: "Competitive Strategy",
    question: "Which of the following is least consistent with an aggressive competitive strategy?",
    options: [
      { id: "A", text: "Competitors aggressively building capacities" },
      { id: "B", text: "Competitors sharing components and facilities" },
      { id: "C", text: "Competitors sharply reducing prices" },
      { id: "D", text: "Competitors seeking exclusivity from suppliers and dealers" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 35,
    week: 4,
    topic: "Competitive Strategy",
    question: "Who proposed the three generic competitive strategies of Cost Leadership, Differentiation, and Focus?",
    options: [
      { id: "A", text: "C. K. Prahalad" },
      { id: "B", text: "Pankaj Ghemawat" },
      { id: "C", text: "Vijay Govindarajan" },
      { id: "D", text: "Michael Porter" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 36,
    week: 4,
    topic: "Competitive Strategy",
    question: "Which of the following best supports the generic strategy of Cost Leadership?",
    options: [
      { id: "A", text: "Product differentiation" },
      { id: "B", text: "Economies of scale" },
      { id: "C", text: "Product diversity" },
      { id: "D", text: "Diseconomies of scope" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 37,
    week: 4,
    topic: "Competitive Strategy",
    question: "According to the concept of networked industries and firms, organizations today are increasingly connected with their stakeholders through:",
    options: [
      { id: "A", text: "Postal services" },
      { id: "B", text: "Social networking sites" },
      { id: "C", text: "Television advertisements only" },
      { id: "D", text: "Printed newsletters" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 38,
    week: 4,
    topic: "Competitive Strategy",
    question: "According to the concept of collaborative power of suppliers, bilateral collaboration should evolve into:",
    options: [
      { id: "A", text: "Competition among component makers" },
      { id: "B", text: "A collaborative network involving all participants in the system" },
      { id: "C", text: "Exclusive contracts with a single supplier" },
      { id: "D", text: "Independent product development by manufacturers" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 39,
    week: 4,
    topic: "Competitive Strategy",
    question: "Strategic groups are said to function as an intersection of:",
    options: [
      { id: "A", text: "Vision and mission" },
      { id: "B", text: "Structure and strategy" },
      { id: "C", text: "Finance and operations" },
      { id: "D", text: "Marketing and technology" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 40,
    week: 4,
    topic: "Competitive Strategy",
    question: "In a rapidly globalizing context, structural analysis, strategic grouping, and mobility barriers should be viewed as:",
    options: [
      { id: "A", text: "A static framework" },
      { id: "B", text: "A dynamic paradigm" },
      { id: "C", text: "A financial model" },
      { id: "D", text: "A regulatory mechanism" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 5: Buyers, Suppliers and Competitors ---
  {
    id: 41,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "Which of the following best illustrates the positive impact of buyer power on an industry?",
    options: [
      { id: "A", text: "Increasing dependence on imported technologies and components" },
      { id: "B", text: "Encouraging technological efficiency and cost competitiveness across the industry ecosystem" },
      { id: "C", text: "Limiting collaboration between firms and suppliers" },
      { id: "D", text: "Reducing incentives for innovation and scaling up" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 42,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "When a new product is introduced into the market, its pricing tends to be:",
    options: [
      { id: "A", text: "Lower than existing products" },
      { id: "B", text: "On the higher side" },
      { id: "C", text: "Fixed by the government" },
      { id: "D", text: "Independent of technology costs" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 43,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "A market characterized by the presence of two dominant firms is referred to as:",
    options: [
      { id: "A", text: "Monopoly" },
      { id: "B", text: "Duopoly" },
      { id: "C", text: "Oligopoly" },
      { id: "D", text: "Monopsony" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 44,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "Making marginal capacity additions or minor product improvements is an example of:",
    options: [
      { id: "A", text: "Cooperative moves" },
      { id: "B", text: "Threatening moves" },
      { id: "C", text: "Non-threatening moves" },
      { id: "D", text: "Defensive moves" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 45,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "Which of the following actions is an example of a threatening move?",
    options: [
      { id: "A", text: "All firms in an industry increasing prices to recover input cost increases" },
      { id: "B", text: "Protecting the current market position" },
      { id: "C", text: "Building new plants and initiating aggressive product price wars" },
      { id: "D", text: "Making minor product improvements" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 46,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "A market signal is best described as:",
    options: [
      { id: "A", text: "A government regulation affecting competition" },
      { id: "B", text: "An action by a firm that provides a direct or indirect indication of its intentions, motives, goals, or internal situation" },
      { id: "C", text: "A financial statement issued by a company" },
      { id: "D", text: "A pricing strategy adopted by competitors" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 47,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "According to the framework for competitor strategy analysis, profiling a competitor includes the assessment of:",
    options: [
      { id: "A", text: "Vision, Mission and Goals" },
      { id: "B", text: "Structure and Strategy" },
      { id: "C", text: "Capabilities and Talent" },
      { id: "D", text: "All of the above" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 48,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "Competitor clusters are best defined as companies that:",
    options: [
      { id: "A", text: "Belong to different industries but have identical products" },
      { id: "B", text: "Have similar strategic dimensions but deploy strategies with differentiated competencies and varying levels of competitive intensity" },
      { id: "C", text: "Operate only in global markets" },
      { id: "D", text: "Always follow the same competitive strategy" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 49,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "Which of the following examples best demonstrates the concept of a competitor cluster?",
    options: [
      { id: "A", text: "Two firms offering identical products with identical competitive approaches" },
      { id: "B", text: "Firms with similar strategic dimensions but differing in competencies and competitive intensity" },
      { id: "C", text: "Firms operating in unrelated industries with similar revenues" },
      { id: "D", text: "Firms sharing the same supplier base" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 50,
    week: 5,
    topic: "Buyers, Suppliers and Competitors",
    question: "An existing firm's competencies and competitive actions primarily create:",
    options: [
      { id: "A", text: "Product differentiation" },
      { id: "B", text: "Entry deterrent barriers" },
      { id: "C", text: "Market segmentation" },
      { id: "D", text: "Economies of scale" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 6: Generic Strategies ---
  {
    id: 51,
    week: 6,
    topic: "Generic Strategies",
    question: "According to Porter, the three generic strategies are:",
    options: [
      { id: "A", text: "Diversification, Integration, and Innovation" },
      { id: "B", text: "Cost Leadership, Differentiation, and Focus" },
      { id: "C", text: "Growth, Stability, and Retrenchment" },
      { id: "D", text: "Market Penetration, Product Development, and Diversification" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 52,
    week: 6,
    topic: "Generic Strategies",
    question: "According to the concept of Cost Leadership, a cost leader generally enjoys:",
    options: [
      { id: "A", text: "Below-average returns" },
      { id: "B", text: "Above-average returns" },
      { id: "C", text: "Returns equal to the industry average only" },
      { id: "D", text: "No relationship with profitability" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 53,
    week: 6,
    topic: "Generic Strategies",
    question: "Which of the following is a principle of cost leadership by design?",
    options: [
      { id: "A", text: "Gold-plated design" },
      { id: "B", text: "Lean design principles" },
      { id: "C", text: "Excessive customization" },
      { id: "D", text: "Overengineering" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 54,
    week: 6,
    topic: "Generic Strategies",
    question: "Which of the following is commonly used by firms to achieve differentiation?",
    options: [
      { id: "A", text: "Lean manufacturing only" },
      { id: "B", text: "Design or brand image" },
      { id: "C", text: "High relative market share only" },
      { id: "D", text: "Cost minimization" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 55,
    week: 6,
    topic: "Generic Strategies",
    question: "In a focus strategy, functional strategies are primarily developed around:",
    options: [
      { id: "A", text: "Achieving economies of scale" },
      { id: "B", text: "Serving the chosen target or niche" },
      { id: "C", text: "Expanding into multiple unrelated markets" },
      { id: "D", text: "Reducing product differentiation" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 56,
    week: 6,
    topic: "Generic Strategies",
    question: "According to the Cost Leadership–Differentiation Matrix, Apple is presented as an example of a firm that:",
    options: [
      { id: "A", text: "Is a cost leader but a differentiation follower" },
      { id: "B", text: "Is a differentiation leader but a cost follower" },
      { id: "C", text: "Combines differentiation leadership with cost leadership" },
      { id: "D", text: "Follows neither cost leadership nor differentiation" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 57,
    week: 6,
    topic: "Generic Strategies",
    question: "An industry can be best defined as:",
    options: [
      { id: "A", text: "A group of firms operating in different markets with unrelated products" },
      { id: "B", text: "A group of firms making products that are close substitutes for each other" },
      { id: "C", text: "A collection of suppliers serving a single manufacturer" },
      { id: "D", text: "A network of firms connected through strategic alliances" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 58,
    week: 6,
    topic: "Generic Strategies",
    question: "In the BCG Matrix, the vertical axis represents:",
    options: [
      { id: "A", text: "Relative market share" },
      { id: "B", text: "Market growth rate" },
      { id: "C", text: "Profit margin" },
      { id: "D", text: "Customer satisfaction" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 59,
    week: 6,
    topic: "Generic Strategies",
    question: "Quality-integrated cost management is considered essential because it:",
    options: [
      { id: "A", text: "Eliminates the need for product innovation" },
      { id: "B", text: "Enhances the competitiveness of firms in a global setting" },
      { id: "C", text: "Focuses only on reducing production costs" },
      { id: "D", text: "Replaces differentiation strategies" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 60,
    week: 6,
    topic: "Generic Strategies",
    question: "In the concept of retrofuturism, what serves as the bridge that enables the connection between retro styling and contemporary substance?",
    options: [
      { id: "A", text: "Brand image" },
      { id: "B", text: "Technology" },
      { id: "C", text: "Customer service" },
      { id: "D", text: "Economies of scale" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 7: Industry Evolution and Structure ---
  {
    id: 61,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "Every product typically passes through which of the following phases in its lifecycle?",
    options: [
      { id: "A", text: "Introduction, Growth, Maturity, and Decline" },
      { id: "B", text: "Development, Expansion, Saturation, and Exit" },
      { id: "C", text: "Entry, Innovation, Competition, and Exit" },
      { id: "D", text: "Launch, Adoption, Diversification, and Withdrawal" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 62,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "A fragmented industry is characterized by:",
    options: [
      { id: "A", text: "One firm having dominant market share" },
      { id: "B", text: "No firm having a significant market share" },
      { id: "C", text: "Government ownership of all firms" },
      { id: "D", text: "Presence of only large multinational corporations" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 63,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "The absence of which of the following is identified as a cause of industry fragmentation?",
    options: [
      { id: "A", text: "Product differentiation" },
      { id: "B", text: "Economies of scale or experience curve" },
      { id: "C", text: "Customer demand" },
      { id: "D", text: "Technological innovation" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 64,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "In a fragmented industry with low production volumes, shared components, shared facilities, and shared channels primarily help firms to:",
    options: [
      { id: "A", text: "Eliminate customer demand" },
      { id: "B", text: "Create economies of scale" },
      { id: "C", text: "Increase inventory costs" },
      { id: "D", text: "Reduce product quality" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 65,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "Some existing industries attempt to sustain themselves for a few additional years by:",
    options: [
      { id: "A", text: "Exiting the market immediately" },
      { id: "B", text: "Investing in product lifecycle extensions or lower costs" },
      { id: "C", text: "Eliminating all product variants" },
      { id: "D", text: "Reducing customer value" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 66,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "A mature industry is characterized by:",
    options: [
      { id: "A", text: "Rapid technological breakthroughs and high uncertainty" },
      { id: "B", text: "Technological development reaching a plateau" },
      { id: "C", text: "Unlimited entry of new firms" },
      { id: "D", text: "Declining customer demand only" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 67,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "Which of the following situations best reflects a declining industry?",
    options: [
      { id: "A", text: "Sales fluctuate with business cycles but show long-term growth." },
      { id: "B", text: "Sales remain stable despite technological disruptions." },
      { id: "C", text: "Sales continuously decline over an extended period regardless of economic or business cycle fluctuations." },
      { id: "D", text: "Sales increase due to market expansion and innovation." }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 68,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "In vertical integration, the integrated processes are typically part of a:",
    options: [
      { id: "A", text: "Financial reporting system" },
      { id: "B", text: "Total value chain" },
      { id: "C", text: "Marketing campaign" },
      { id: "D", text: "Human resource framework" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 69,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "Generic competitive strategy is primarily a:",
    options: [
      { id: "A", text: "Customer-centric approach" },
      { id: "B", text: "Supplier-centric approach" },
      { id: "C", text: "Firm-centric approach" },
      { id: "D", text: "Government-centric approach" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 70,
    week: 7,
    topic: "Industry Evolution and Structure",
    question: "Which of the following best describes a global industry?",
    options: [
      { id: "A", text: "An industry where firms operate primarily within a single country" },
      { id: "B", text: "An industry in which firms coordinate activities across multiple countries" },
      { id: "C", text: "An industry where production is controlled entirely by foreign governments" },
      { id: "D", text: "An industry that serves only local markets" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 8: Technology and Competitive Strategy (Part 1) ---
  {
    id: 71,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "The competitiveness of business constructs depends significantly on:",
    options: [
      { id: "A", text: "Marketing expenditure alone" },
      { id: "B", text: "Robust deployment of technology" },
      { id: "C", text: "Industry size alone" },
      { id: "D", text: "Government incentives" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 72,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "Excessive technological growth without adequate safeguards can lead to:",
    options: [
      { id: "A", text: "Reduced environmental pollution" },
      { id: "B", text: "Adverse environmental impacts and resource depletion" },
      { id: "C", text: "Elimination of commercial interests" },
      { id: "D", text: "Longer product life cycles" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 73,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "According to the technology pyramid, innovators primarily:",
    options: [
      { id: "A", text: "Take products to the mass market" },
      { id: "B", text: "Create new businesses and even new industries through new products" },
      { id: "C", text: "Focus on reducing production costs" },
      { id: "D", text: "Expand existing markets through imitation" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 74,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "Which of the following represents a level of innovation?",
    options: [
      { id: "A", text: "Vertical Integration" },
      { id: "B", text: "Breakthrough Innovation" },
      { id: "C", text: "Cost Leadership" },
      { id: "D", text: "Market Segmentation" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 75,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "Which of the following correctly lists a typology of product innovation?",
    options: [
      { id: "A", text: "Cost Leadership Innovation" },
      { id: "B", text: "Analogue Innovation" },
      { id: "C", text: "Market Penetration Innovation" },
      { id: "D", text: "Strategic Innovation" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 76,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "The first occurrence of technologies such as the automobile, telephone, radio, television, penicillin, and artificial intelligence in their respective industries are examples of:",
    options: [
      { id: "A", text: "Adaptive Innovation" },
      { id: "B", text: "Integrative Innovation" },
      { id: "C", text: "Fundamental Innovation" },
      { id: "D", text: "Analogue Innovation" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 77,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "Which of the following best illustrates how an industry can reinvent itself in response to technological disruption?",
    options: [
      { id: "A", text: "Maintaining existing product features without modification" },
      { id: "B", text: "Integrating new technologies and functionalities while preserving core value propositions" },
      { id: "C", text: "Reducing investment in product development" },
      { id: "D", text: "Focusing solely on cost reduction" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 78,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "Which of the following is associated with proprietary technologies?",
    options: [
      { id: "A", text: "Helping redefine multiple businesses through stakeholder access" },
      { id: "B", text: "Establishing pioneering and uncontested products and helping build core businesses" },
      { id: "C", text: "Creating failures due to mistiming" },
      { id: "D", text: "Reinforcing companies solely through business models" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 79,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "The introduction of the Sony Walkman illustrates how innovation can:",
    options: [
      { id: "A", text: "Create new product applications and redefine consumer experiences" },
      { id: "B", text: "Eliminate the need for technology in business strategy" },
      { id: "C", text: "Depend solely on lower prices for success" },
      { id: "D", text: "Replace the importance of product differentiation" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 80,
    week: 8,
    topic: "Technology and Competitive Strategy",
    question: "The three innovator strategies include:",
    options: [
      { id: "A", text: "Cost Leadership, Differentiation, and Focus" },
      { id: "B", text: "Application Leadership, Experience Leadership, and Experimental Leadership" },
      { id: "C", text: "Diversification, Integration, and Retrenchment" },
      { id: "D", text: "Product Development, Market Development, and Market Penetration" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 9: Technology and Competitive Strategy (Part 2) ---
  {
    id: 81,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "According to the technology pyramid, industries generally consist of:",
    options: [
      { id: "A", text: "Many innovation leaders and few followers" },
      { id: "B", text: "A few innovation leaders, several differentiators, and many followers" },
      { id: "C", text: "Equal numbers of innovators, differentiators, and followers" },
      { id: "D", text: "Only innovators and differentiators" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 82,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "A company notices that customers increasingly use smartphones for selfies and redesigns its future products accordingly. Which step of futurism-based differentiation does this best illustrate?",
    options: [
      { id: "A", text: "Ignore" },
      { id: "B", text: "Observe" },
      { id: "C", text: "Exit" },
      { id: "D", text: "Consolidate" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 83,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "Which of the following is identified as a core faculty for firms pursuing differentiation through futurism?",
    options: [
      { id: "A", text: "Sophisticated sensing mechanisms" },
      { id: "B", text: "Mass production" },
      { id: "C", text: "Backward integration" },
      { id: "D", text: "Price leadership" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 84,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "A consumer electronics company appoints a team to study weak signals in technology, predict future user behavior, and develop products for needs that do not yet exist. This approach is best described as:",
    options: [
      { id: "A", text: "Cost leadership" },
      { id: "B", text: "Futurism as a differentiator" },
      { id: "C", text: "Market penetration" },
      { id: "D", text: "Vertical integration" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 85,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "According to WIPO, which of the following is not among the key intellectual property protections emphasized for industrial and commercial purposes?",
    options: [
      { id: "A", text: "Utility models" },
      { id: "B", text: "Trademarks" },
      { id: "C", text: "Industrial designs" },
      { id: "D", text: "Equity shares" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 86,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "A tea variety is renowned for its unique flavor due to the climate and soil of a particular region. Which form of intellectual property protection is most appropriate for such a product?",
    options: [
      { id: "A", text: "Patent" },
      { id: "B", text: "Trademark" },
      { id: "C", text: "Geographical Indication (GI)" },
      { id: "D", text: "Utility Model" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 87,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "A company is the first to introduce a revolutionary technology in an industry. Other firms later improve upon it with additional features and designs without being the original inventors. These later firms are best described as:",
    options: [
      { id: "A", text: "Followers" },
      { id: "B", text: "Differentiators" },
      { id: "C", text: "Monopolists" },
      { id: "D", text: "Cost leaders" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 88,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "A pharmaceutical company develops a novel drug and secures a patent for it. The patent primarily enables the company to:",
    options: [
      { id: "A", text: "Prevent others from commercially exploiting the invention without authorization" },
      { id: "B", text: "Register the drug's brand name only" },
      { id: "C", text: "Guarantee global market leadership" },
      { id: "D", text: "Avoid regulatory approvals" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 89,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "Which of the following technologies enables real-time data transfer and cargo tracking in the shipping industry?",
    options: [
      { id: "A", text: "Robotics" },
      { id: "B", text: "Blockchain Technology" },
      { id: "C", text: "Augmented Reality" },
      { id: "D", text: "Hyperloop Transport System" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 90,
    week: 9,
    topic: "Technology and Competitive Strategy",
    question: "Which of the following is recognized as one of the technological innovations that revolutionized the media industry?",
    options: [
      { id: "A", text: "Blockchain" },
      { id: "B", text: "Gutenberg’s Printing Press" },
      { id: "C", text: "Hyperloop" },
      { id: "D", text: "Industrial Robot" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 10: Technology and Customer Centricity ---
  {
    id: 91,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "In a global company, Stock Keeping Units (SKUs) typically proliferate because:",
    options: [
      { id: "A", text: "Firms avoid serving multiple markets." },
      { id: "B", text: "Products are varied to meet country- and customer-specific homologation needs." },
      { id: "C", text: "Every customer demands a unique product design." },
      { id: "D", text: "Companies eliminate standardization." }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 92,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "Social entrepreneurship in remote areas can become more effective with deployment of:",
    options: [
      { id: "A", text: "Manufacturing technologies" },
      { id: "B", text: "Robotic technologies" },
      { id: "C", text: "Exploration technologies" },
      { id: "D", text: "Digital and Internet technologies" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 93,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "Genomics is helpful in:",
    options: [
      { id: "A", text: "Ergonomics" },
      { id: "B", text: "Pharma economics" },
      { id: "C", text: "Personalised medicine" },
      { id: "D", text: "Heuristics" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 94,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "Public policy is vital to ensure that private enterprise in its quest for sales maximization and cost minimization does not lose track of:",
    options: [
      { id: "A", text: "Company interests" },
      { id: "B", text: "Industry interests" },
      { id: "C", text: "Economic interests" },
      { id: "D", text: "Consumer interests" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 95,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "Which of the following pairs best illustrates a traditional product being supplemented by a newer alternative?",
    options: [
      { id: "A", text: "Tea leaves → Instant tea bags" },
      { id: "B", text: "LED lights → Incandescent bulbs" },
      { id: "C", text: "Ball point pens → Fountain pens" },
      { id: "D", text: "Canned drinks → Bottled drinks" }
    ],
    correctAnswer: "A",
    explanation: ""
  },
  {
    id: 96,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "According to the concept of industry synergy, telecommunications is an example of:",
    options: [
      { id: "A", text: "A functional (enabler) industry" },
      { id: "B", text: "An infrastructure (platform) industry" },
      { id: "C", text: "A manufacturing industry" },
      { id: "D", text: "A fragmented industry" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 97,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "The synergy between infrastructure industries such as telecommunications and functional industries such as sensors has been identified as a key driver of:",
    options: [
      { id: "A", text: "Industry 2.0" },
      { id: "B", text: "Vertical integration" },
      { id: "C", text: "Industry 4.0" },
      { id: "D", text: "Mass customization" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 98,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "Which of the following Indian cities has been recognized as one of the top global innovation hubs?",
    options: [
      { id: "A", text: "Delhi" },
      { id: "B", text: "Mumbai" },
      { id: "C", text: "Bengaluru" },
      { id: "D", text: "Chennai" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 99,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "Competitive improvement is most likely to result in:",
    options: [
      { id: "A", text: "Destruction of the market" },
      { id: "B", text: "Expansion of market space with healthier industry returns overall" },
      { id: "C", text: "Elimination of competitors" },
      { id: "D", text: "Exit of innovators" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 100,
    week: 10,
    topic: "Technology and Customer Centricity",
    question: "Sony's launch of the Walkman best illustrates that successful innovation can:",
    options: [
      { id: "A", text: "Destroy existing markets" },
      { id: "B", text: "Expand market space and create new customer value" },
      { id: "C", text: "Guarantee monopoly forever" },
      { id: "D", text: "Eliminate the need for product differentiation" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 11: Technology and Business ---
  {
    id: 101,
    week: 11,
    topic: "Technology and Business",
    question: "Which of the following economic models is widely regarded as essential for addressing climate change through sustainable resource utilization?",
    options: [
      { id: "A", text: "Global economy" },
      { id: "B", text: "Circular economy" },
      { id: "C", text: "National economy" },
      { id: "D", text: "Triangular economy" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 102,
    week: 11,
    topic: "Technology and Business",
    question: "Products that combine fresh designs with nostalgic elements are most likely to generate incremental and replacement demand from:",
    options: [
      { id: "A", text: "Only customers who purchased the company's past products" },
      { id: "B", text: "Only customers currently using the company's products" },
      { id: "C", text: "Both existing customers and previous customers associated with the company's products" },
      { id: "D", text: "Customers with no prior association with the company's products" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 103,
    week: 11,
    topic: "Technology and Business",
    question: "Transforming historic palaces into modern hotels while preserving their heritage and incorporating contemporary amenities is best described as:",
    options: [
      { id: "A", text: "Conventional real estate development" },
      { id: "B", text: "Retro-futuristic ethnic-contemporary hospitality" },
      { id: "C", text: "Monetization of royal estates" },
      { id: "D", text: "Opportunistic commercialization" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 104,
    week: 11,
    topic: "Technology and Business",
    question: "Strategic shifts can be:",
    options: [
      { id: "A", text: "Only expansionistic" },
      { id: "B", text: "Only minimalistic" },
      { id: "C", text: "Both expansionistic and minimalistic" },
      { id: "D", text: "Neither expansionistic nor minimalistic" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 105,
    week: 11,
    topic: "Technology and Business",
    question: "A company leverages its existing technological expertise to enter an emerging market with strong growth potential. This best illustrates a successful strategic shift based on:",
    options: [
      { id: "A", text: "Random diversification" },
      { id: "B", text: "Alignment between current competencies and emerging opportunities" },
      { id: "C", text: "Market exit strategy" },
      { id: "D", text: "Cost minimization alone" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 106,
    week: 11,
    topic: "Technology and Business",
    question: "As companies undertake sweeping strategic shifts over time, they often:",
    options: [
      { id: "A", text: "Reduce their product lines continuously" },
      { id: "B", text: "Add product lines and change their business mix" },
      { id: "C", text: "Exit all existing businesses" },
      { id: "D", text: "Focus exclusively on a single product" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 107,
    week: 11,
    topic: "Technology and Business",
    question: "A company that gradually expands into multiple unrelated product categories through successive strategic shifts is most likely to evolve into a:",
    options: [
      { id: "A", text: "Monopoly" },
      { id: "B", text: "Conglomerate" },
      { id: "C", text: "Niche player" },
      { id: "D", text: "Fragmented enterprise" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 108,
    week: 11,
    topic: "Technology and Business",
    question: "In McKinsey’s Three Horizons of Growth framework, the third horizon is intended to be:",
    options: [
      { id: "A", text: "Focused only on improving existing operations" },
      { id: "B", text: "Transformational and future-oriented" },
      { id: "C", text: "Limited to short-term cost reductions" },
      { id: "D", text: "Concerned only with market consolidation" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 109,
    week: 11,
    topic: "Technology and Business",
    question: "The AR/VR approach is expected to provide a competitive advantage in which of the following sectors?",
    options: [
      { id: "A", text: "Agriculture and mining only" },
      { id: "B", text: "Entertainment, media, education, and healthcare" },
      { id: "C", text: "Banking and insurance only" },
      { id: "D", text: "Retail and logistics only" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 110,
    week: 11,
    topic: "Technology and Business",
    question: "Retro-futurism primarily creates new opportunities by:",
    options: [
      { id: "A", text: "Eliminating replacement demand" },
      { id: "B", text: "Creating new product-market spaces that combine incremental and replacement demand" },
      { id: "C", text: "Focusing only on existing customers" },
      { id: "D", text: "Avoiding innovation in product design" }
    ],
    correctAnswer: "B",
    explanation: ""
  },

  // --- WEEK 12: Technology, Innovation and Cases (Final Screenshot Bank) ---
  {
    id: 111,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "General Electric (GE), over the course of its evolution and expansion into multiple business segments, is best classified as a:",
    options: [
      { id: "A", text: "Specialized firm" },
      { id: "B", text: "Conglomerate firm" },
      { id: "C", text: "Fragmented firm" },
      { id: "D", text: "Niche firm" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 112,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "Which of the following companies is widely recognized as a pioneer in India's modern electric scooter market?",
    options: [
      { id: "A", text: "Hero" },
      { id: "B", text: "Ather" },
      { id: "C", text: "Bajaj" },
      { id: "D", text: "Ola" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 113,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "Which of the following energy carriers has gained significant importance in the development of zero-emission automobiles?",
    options: [
      { id: "A", text: "Oxygen" },
      { id: "B", text: "Wind" },
      { id: "C", text: "Water" },
      { id: "D", text: "Hydrogen" }
    ],
    correctAnswer: "D",
    explanation: ""
  },
  {
    id: 114,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "Dyson's success in the home appliance industry is primarily attributed to its emphasis on:",
    options: [
      { id: "A", text: "Price discounts" },
      { id: "B", text: "Franchising" },
      { id: "C", text: "Innovative technology and product design" },
      { id: "D", text: "Outsourcing Manufacturing" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 115,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "Developing multiple prototypes and testing them until the optimal design is achieved reflects:",
    options: [
      { id: "A", text: "Product standardization" },
      { id: "B", text: "Prototyping until perfection" },
      { id: "C", text: "Economies of scale" },
      { id: "D", text: "Market penetration" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 116,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "A company introduces a groundbreaking product while also making steady improvements to its existing offerings. This strategy exemplifies:",
    options: [
      { id: "A", text: "Market fragmentation" },
      { id: "B", text: "Coupling radical and incremental innovation" },
      { id: "C", text: "Cost minimization" },
      { id: "D", text: "Product elimination" }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 117,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "Which principle is most closely associated with challenging existing industry practices to gain a competitive advantage?",
    options: [
      { id: "A", text: "Continuous outsourcing" },
      { id: "B", text: "Price leadership" },
      { id: "C", text: "Disrupting the status quo" },
      { id: "D", text: "Capacity rationalization" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 118,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "Why is the threat of new entrants relatively low in the home appliance industry in which Dyson competes?",
    options: [
      { id: "A", text: "The industry has very few customers." },
      { id: "B", text: "Sustained innovation and technical expertise are required to compete effectively." },
      { id: "C", text: "Government regulations prohibit new firms." },
      { id: "D", text: "Raw materials are unavailable." }
    ],
    correctAnswer: "B",
    explanation: ""
  },
  {
    id: 119,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "According to Porter's Five Forces analysis of Dyson, which force remains high despite the company's market leadership?",
    options: [
      { id: "A", text: "Bargaining power of suppliers" },
      { id: "B", text: "Threat of new entrants" },
      { id: "C", text: "Threat of substitutes" },
      { id: "D", text: "Bargaining power of buyers" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 120,
    week: 12,
    topic: "Technology, Innovation and Cases",
    question: "Which of the following best describes an oligopoly?",
    options: [
      { id: "A", text: "An industry with a single seller and many buyers" },
      { id: "B", text: "An industry with numerous firms and no entry barriers" },
      { id: "C", text: "An industry dominated by a few major firms whose competitive decisions are interdependent" },
      { id: "D", text: "An industry where firms do not influence each other's decisions" }
    ],
    correctAnswer: "C",
    explanation: ""
  },
  {
    id: 121,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "In McGahan’s model, radical change occurs when:",
    options: [
      { id: "A", text: "Only core activities are threatened" },
      { id: "B", text: "Only core assets are threatened" },
      { id: "C", text: "Both core activities and core assets are threatened" },
      { id: "D", text: "Neither is threatened" },
    ],
    correctAnswer: "C",
    explanation: "The four trajectories are radical, progressive, creative and intermediating."
  },
 
  {
    id: 122,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "In intermediating change:",
    options: [
      { id: "A", text: "Both core activities and assets become obsolete" },
      { id: "B", text: "Core activities are threatened, but core assets keep value if used in new ways" },
      { id: "C", text: "Only core assets are threatened" },
      { id: "D", text: "Nothing is threatened" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 123,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "A financially stable firm in a stable, mature, low-growth industry that retains its position through specialisation and alliances has which SPACE posture?",
    options: [
      { id: "A", text: "Aggressive" },
      { id: "B", text: "Competitive" },
      { id: "C", text: "Conservative" },
      { id: "D", text: "Defensive" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 124,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "A firm in a plateaued industry, lacking leading products and finances, relying on continuous improvement and cost reduction, has which SPACE posture?",
    options: [
      { id: "A", text: "Defensive" },
      { id: "B", text: "Aggressive" },
      { id: "C", text: "Competitive" },
      { id: "D", text: "Conservative" },
    ],
    correctAnswer: "A",
    explanation: "It may even consider leaving the industry."
  },
 
  {
    id: 125,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "In the TOWS Matrix, the ST pairing means:",
    options: [
      { id: "A", text: "Use opportunities to overcome weaknesses" },
      { id: "B", text: "Use strengths to overcome or circumvent threats" },
      { id: "C", text: "Use strengths to exploit opportunities" },
      { id: "D", text: "Avoid weaknesses and threats" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 126,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "The value chain concept (Porter, Competitive Advantage, 1985) is elegant because it focuses on:",
    options: [
      { id: "A", text: "Departments" },
      { id: "B", text: "Legal ownership" },
      { id: "C", text: "Hierarchy" },
      { id: "D", text: "Activities" },
    ],
    correctAnswer: "D",
    explanation: "It is independent of integration or outsourcing decisions."
  },
 
  {
    id: 127,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "A buyer group is powerful when:",
    options: [
      { id: "A", text: "Products are standard and switching costs are few" },
      { id: "B", text: "Products are unique" },
      { id: "C", text: "The buyer buys a small share of the supplier’s output" },
      { id: "D", text: "Switching costs are high" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 128,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "Which entry–exit barrier combination is the “best case”?",
    options: [
      { id: "A", text: "Low entry, low exit" },
      { id: "B", text: "Low entry, high exit" },
      { id: "C", text: "High entry, low exit" },
      { id: "D", text: "High entry, high exit" },
    ],
    correctAnswer: "C",
    explanation: "It is difficult to enter and easy to leave."
  },
 
  {
    id: 129,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "In Porter’s contextual framework, which is an external factor?",
    options: [
      { id: "A", text: "Company strengths and weaknesses" },
      { id: "B", text: "Personal values of key implementers" },
      { id: "C", text: "Broader societal expectations" },
      { id: "D", text: "Internal resources" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 130,
    week: 13,
    topic: "Structural and Strategic Analysis",
    question: "Which generic strategy targets only a particular segment?",
    options: [
      { id: "A", text: "Overall cost leadership" },
      { id: "B", text: "Differentiation" },
      { id: "C", text: "Low-cost position" },
      { id: "D", text: "Focus" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 131,
    week: 14,
    topic: "Strategy Formulation",
    question: "In VRIO, a resource that is valuable but not rare gives:",
    options: [
      { id: "A", text: "Competitive disadvantage" },
      { id: "B", text: "Competitive parity" },
      { id: "C", text: "Temporary advantage" },
      { id: "D", text: "Sustained advantage" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 132,
    week: 14,
    topic: "Strategy Formulation",
    question: "Every dominant strategy equilibrium is:",
    options: [
      { id: "A", text: "Never a Nash equilibrium" },
      { id: "B", text: "Always Pareto optimal" },
      { id: "C", text: "A Nash equilibrium, but not every Nash equilibrium is a dominant strategy equilibrium" },
      { id: "D", text: "Possible only with many players" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 133,
    week: 14,
    topic: "Strategy Formulation",
    question: "The BCG Matrix (Bruce Henderson, 1970) is based on:",
    options: [
      { id: "A", text: "Market growth rate and relative market share" },
      { id: "B", text: "Profit and cash flow" },
      { id: "C", text: "Industry attractiveness and business strength" },
      { id: "D", text: "Cost and differentiation" },
    ],
    correctAnswer: "A",
    explanation: "Option C describes the GE Matrix."
  },
 
  {
    id: 134,
    week: 14,
    topic: "Strategy Formulation",
    question: "The GE Matrix has:",
    options: [
      { id: "A", text: "Four cells (growth and share)" },
      { id: "B", text: "Nine cells (business strength and industry attractiveness)" },
      { id: "C", text: "Six cells" },
      { id: "D", text: "Two cells" },
    ],
    correctAnswer: "B",
    explanation: "It is inspired by traffic lights."
  },
 
  {
    id: 135,
    week: 14,
    topic: "Strategy Formulation",
    question: "In the AAA triangle, R&D-to-sales is a proxy for the importance of:",
    options: [
      { id: "A", text: "Adaptation" },
      { id: "B", text: "Arbitrage" },
      { id: "C", text: "Aggregation" },
      { id: "D", text: "Diversification" },
    ],
    correctAnswer: "C",
    explanation: "Advertising-to-sales is the proxy for adaptation, and labour cost for arbitrage."
  },
 
  {
    id: 136,
    week: 14,
    topic: "Strategy Formulation",
    question: "Value innovation means:",
    options: [
      { id: "A", text: "Simultaneous pursuit of differentiation and low cost" },
      { id: "B", text: "Benchmarking rivals" },
      { id: "C", text: "Cutting prices" },
      { id: "D", text: "Entering red oceans" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 137,
    week: 14,
    topic: "Strategy Formulation",
    question: "Which is NOT in the Four Actions Framework?",
    options: [
      { id: "A", text: "Eliminate" },
      { id: "B", text: "Reduce" },
      { id: "C", text: "Raise" },
      { id: "D", text: "Defend" },
    ],
    correctAnswer: "D",
    explanation: "The four actions are Eliminate, Reduce, Raise and Create."
  },
 
  {
    id: 138,
    week: 14,
    topic: "Strategy Formulation",
    question: "In McKinsey’s Three Horizons, futuristic businesses belong to:",
    options: [
      { id: "A", text: "Horizon 1" },
      { id: "B", text: "Horizon 2" },
      { id: "C", text: "Horizon 3" },
      { id: "D", text: "None" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 139,
    week: 14,
    topic: "Strategy Formulation",
    question: "A limitation of the Balanced Scorecard is that it is:",
    options: [
      { id: "A", text: "Ignoring the financial perspective" },
      { id: "B", text: "A performance review tool rather than a strategy planning tool" },
      { id: "C", text: "Lacking a customer perspective" },
      { id: "D", text: "Explicit on ESG" },
    ],
    correctAnswer: "B",
    explanation: "It also does not explicitly consider ESG."
  },
 
  {
    id: 140,
    week: 14,
    topic: "Strategy Formulation",
    question: "In the Value Capture Model, value created in a simple network equals:",
    options: [
      { id: "A", text: "Price minus cost" },
      { id: "B", text: "Buyer’s willingness-to-pay minus supplier’s opportunity cost" },
      { id: "C", text: "Revenue minus tax" },
      { id: "D", text: "Profit margin" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 141,
    week: 15,
    topic: "Strategy Execution",
    question: "Chandler concluded that:",
    options: [
      { id: "A", text: "Structure always precedes strategy" },
      { id: "B", text: "Culture determines structure" },
      { id: "C", text: "Technology determines strategy" },
      { id: "D", text: "Changes in corporate strategy led to changes in structure" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 142,
    week: 15,
    topic: "Strategy Execution",
    question: "Hammer’s reengineering is:",
    options: [
      { id: "A", text: "Gradual cost trimming" },
      { id: "B", text: "Radical redesign of business processes for major gains in cost, service or time" },
      { id: "C", text: "Annual budgeting" },
      { id: "D", text: "An org-chart redesign" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 143,
    week: 15,
    topic: "Strategy Execution",
    question: "Firms with rigid strategy but flexible structure, staying in the game through process innovation, are:",
    options: [
      { id: "A", text: "Leaders" },
      { id: "B", text: "Seekers" },
      { id: "C", text: "Laggards" },
      { id: "D", text: "Losers" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 144,
    week: 15,
    topic: "Strategy Execution",
    question: "Which is NOT an offensive tactic?",
    options: [
      { id: "A", text: "Full-line competition" },
      { id: "B", text: "Ecosystem dominance" },
      { id: "C", text: "Increasing perceptions of retaliation" },
      { id: "D", text: "Market switching" },
    ],
    correctAnswer: "C",
    explanation: "It is a defensive tactic."
  },
 
  {
    id: 145,
    week: 15,
    topic: "Strategy Execution",
    question: "A strategy based only on offensive tactics entails:",
    options: [
      { id: "A", text: "Low investment, low risk" },
      { id: "B", text: "High investment, high risk" },
      { id: "C", text: "Guaranteed share" },
      { id: "D", text: "No investment" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 146,
    week: 15,
    topic: "Strategy Execution",
    question: "According to Gartner, the biggest challenge reported by 70% of leaders is:",
    options: [
      { id: "A", text: "Lack of capital" },
      { id: "B", text: "Weak vision" },
      { id: "C", text: "Excess competition" },
      { id: "D", text: "Slow strategy execution" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 147,
    week: 15,
    topic: "Strategy Execution",
    question: "In Gartner’s five pillars, “accountability = effectiveness” belongs to:",
    options: [
      { id: "A", text: "Strategy Creation" },
      { id: "B", text: "Communication" },
      { id: "C", text: "Performance Management" },
      { id: "D", text: "Organizational Capacity" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 148,
    week: 15,
    topic: "Strategy Execution",
    question: "The 2010s are associated with the:",
    options: [
      { id: "A", text: "Digital Era" },
      { id: "B", text: "Transformation Era" },
      { id: "C", text: "Prospecting Era" },
      { id: "D", text: "Liberalisation Era" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 149,
    week: 15,
    topic: "Strategy Execution",
    question: "“Operational excellence” is an example of which strategy level?",
    options: [
      { id: "A", text: "Corporate" },
      { id: "B", text: "Competitive" },
      { id: "C", text: "Functional" },
      { id: "D", text: "Global" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 150,
    week: 15,
    topic: "Strategy Execution",
    question: "According to the notes, the “right question” in narrowing options into choices is:",
    options: [
      { id: "A", text: "What should we do?" },
      { id: "B", text: "What might we do?" },
      { id: "C", text: "What must we do?" },
      { id: "D", text: "What did we do?" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 151,
    week: 16,
    topic: "Competitive Strategy",
    question: "Compared with industrial competitive forces, national economic forces are:",
    options: [
      { id: "A", text: "More predictable" },
      { id: "B", text: "More volatile and unpredictable" },
      { id: "C", text: "Unaffected by policy" },
      { id: "D", text: "Less global" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 152,
    week: 16,
    topic: "Competitive Strategy",
    question: "The Six Forces Model places which force at the core?",
    options: [
      { id: "A", text: "Rivalry" },
      { id: "B", text: "Substitutes" },
      { id: "C", text: "System liquidity" },
      { id: "D", text: "Supplier power" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 153,
    week: 16,
    topic: "Competitive Strategy",
    question: "Reliance Jio’s liquidity story is contrasted with:",
    options: [
      { id: "A", text: "Vodafone Idea" },
      { id: "B", text: "Bharti Airtel" },
      { id: "C", text: "BSNL" },
      { id: "D", text: "Tata Teleservices" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 154,
    week: 16,
    topic: "Competitive Strategy",
    question: "In economic stringency, customers tend to:",
    options: [
      { id: "A", text: "Buy more premium products" },
      { id: "B", text: "Adopt new products faster" },
      { id: "C", text: "Demand longer credit only" },
      { id: "D", text: "Shift from high-cost premium to low-cost functional products" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 155,
    week: 16,
    topic: "Competitive Strategy",
    question: "Aggressive competitive strategies are typically:",
    options: [
      { id: "A", text: "Investment-intensive and often financed by external debt and equity" },
      { id: "B", text: "Low-cost" },
      { id: "C", text: "Done only in downturns" },
      { id: "D", text: "Funded purely by internal cash" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 156,
    week: 16,
    topic: "Competitive Strategy",
    question: "In the collaborative view, customers are:",
    options: [
      { id: "A", text: "The biggest competitive threat" },
      { id: "B", text: "The greatest strength of a company" },
      { id: "C", text: "Irrelevant" },
      { id: "D", text: "Substitutes" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 157,
    week: 16,
    topic: "Competitive Strategy",
    question: "Competing firms sharing facilities, co-branding and cross-licensing aim to:",
    options: [
      { id: "A", text: "Eliminate competition" },
      { id: "B", text: "Merge" },
      { id: "C", text: "Pool resources and cut costs while keeping identities distinct" },
      { id: "D", text: "Raise entry barriers" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 158,
    week: 16,
    topic: "Competitive Strategy",
    question: "Porter’s Five Forces draws on:",
    options: [
      { id: "A", text: "Resource-based view" },
      { id: "B", text: "Game theory" },
      { id: "C", text: "Behavioural theory" },
      { id: "D", text: "The structure–conduct–performance paradigm" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 159,
    week: 16,
    topic: "Competitive Strategy",
    question: "A strategic group is:",
    options: [
      { id: "A", text: "An intermediate frame of reference between the whole industry and individual firms" },
      { id: "B", text: "A legal alliance" },
      { id: "C", text: "A board committee" },
      { id: "D", text: "A set of suppliers" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 160,
    week: 16,
    topic: "Competitive Strategy",
    question: "According to the notes:",
    options: [
      { id: "A", text: "Cross-industry movement is more common" },
      { id: "B", text: "Cross-strategic-group movement is more common than cross-industry movement" },
      { id: "C", text: "Firms never cross groups" },
      { id: "D", text: "Mobility barriers are irrelevant" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 161,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "The notes say a firm should view buyers as:",
    options: [
      { id: "A", text: "A group that drives profits down" },
      { id: "B", text: "Triggers for competitiveness" },
      { id: "C", text: "Irrelevant to strategy" },
      { id: "D", text: "A type of substitute" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 162,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "The “flipped” proposition says a firm should choose its products and services based on:",
    options: [
      { id: "A", text: "Existing plant capacity" },
      { id: "B", text: "Competitors’ range" },
      { id: "C", text: "The available buyer universe" },
      { id: "D", text: "Supplier capability" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 163,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "The Fortune at the Bottom of the Pyramid (2004) is by:",
    options: [
      { id: "A", text: "Michael Porter" },
      { id: "B", text: "C. K. Prahalad" },
      { id: "C", text: "Pankaj Ghemawat" },
      { id: "D", text: "Robert Kaplan" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 164,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "Porter considers which decision the key strategic decision in purchasing?",
    options: [
      { id: "A", text: "Pricing" },
      { id: "B", text: "Vertical integration (make or buy)" },
      { id: "C", text: "Logistics" },
      { id: "D", text: "Inventory" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 165,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "The key challenge in the firm–supplier relationship is balancing:",
    options: [
      { id: "A", text: "Price and volume" },
      { id: "B", text: "Quality and speed" },
      { id: "C", text: "Cost and capacity" },
      { id: "D", text: "Proprietary technology and freedom to operate" },
    ],
    correctAnswer: "D",
    explanation: "Dual sourcing and flexi-designing address this."
  },
 
  {
    id: 166,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "Poaching people and aggressive price wars are:",
    options: [
      { id: "A", text: "Cooperative moves" },
      { id: "B", text: "Non-threatening moves" },
      { id: "C", text: "Threatening moves" },
      { id: "D", text: "Defensive moves" },
    ],
    correctAnswer: "C",
    explanation: "The four heads are cooperative, non-threatening, threatening and defensive."
  },
 
  {
    id: 167,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "All firms in an industry raising prices to recover input cost increases is a:",
    options: [
      { id: "A", text: "Cooperative move" },
      { id: "B", text: "Threatening move" },
      { id: "C", text: "Defensive move" },
      { id: "D", text: "Non-threatening move" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 168,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "Share builders are firms with core competencies in:",
    options: [
      { id: "A", text: "Only R&D" },
      { id: "B", text: "Balanced mid-range competencies" },
      { id: "C", text: "No differentiation" },
      { id: "D", text: "Marketing effectiveness, manufacturing excellence and delivery efficiency" },
    ],
    correctAnswer: "D",
    explanation: "Share maintainers hold mid-range competencies in an oligopoly, and share losers lack differentiation."
  },
 
  {
    id: 169,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "A market signal is:",
    options: [
      { id: "A", text: "Any action that gives a direct or indirect indication of a firm’s intentions, motives, goals or internal situation" },
      { id: "B", text: "Only a formal press release" },
      { id: "C", text: "A price change" },
      { id: "D", text: "A regulatory notice" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 170,
    week: 17,
    topic: "Buyers, Suppliers and Competitors",
    question: "Competitor clusters are:",
    options: [
      { id: "A", text: "Firms in one legal group" },
      { id: "B", text: "Suppliers of one OEM" },
      { id: "C", text: "Firms in strategic groups with similar strategic dimensions but differentiated competencies and competitive intensity" },
      { id: "D", text: "Firms with identical products" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 171,
    week: 18,
    topic: "Generic Strategies",
    question: "The word “generic” in generic strategies reflects:",
    options: [
      { id: "A", text: "A low level of innovation" },
      { id: "B", text: "Universal application" },
      { id: "C", text: "Commodity products" },
      { id: "D", text: "Small firms only" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 172,
    week: 18,
    topic: "Generic Strategies",
    question: "Which is NOT part of cost leadership by design?",
    options: [
      { id: "A", text: "Lean design" },
      { id: "B", text: "Modularity" },
      { id: "C", text: "Easily available materials" },
      { id: "D", text: "Over-engineering for a premium feel" },
    ],
    correctAnswer: "D",
    explanation: "The notes say “right engineering (no over-engineering)”."
  },
 
  {
    id: 173,
    week: 18,
    topic: "Generic Strategies",
    question: "The new cost–differentiation paradigm views cost leadership in terms of:",
    options: [
      { id: "A", text: "A single price number" },
      { id: "B", text: "Broad cost bands" },
      { id: "C", text: "Advertising spend" },
      { id: "D", text: "Market share only" },
    ],
    correctAnswer: "B",
    explanation: "Firms are slotted as leaders or followers on cost and differentiation."
  },
 
  {
    id: 174,
    week: 18,
    topic: "Generic Strategies",
    question: "A higher proportion of firms with both differentiation and cost leadership leads to:",
    options: [
      { id: "A", text: "A declining industry" },
      { id: "B", text: "A fragmented industry" },
      { id: "C", text: "A high-growth industry" },
      { id: "D", text: "A monopoly" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 175,
    week: 18,
    topic: "Generic Strategies",
    question: "Industries that keep their basic technology but use digital tech to raise sophistication (e.g., Ashok Leyland’s iAlert telematics) are:",
    options: [
      { id: "A", text: "Reinvented" },
      { id: "B", text: "Reinforced" },
      { id: "C", text: "Reconfigured" },
      { id: "D", text: "Transformed" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 176,
    week: 18,
    topic: "Generic Strategies",
    question: "Industries almost threatened with extinction by digital technology that survived by integrating it are:",
    options: [
      { id: "A", text: "Reinforced" },
      { id: "B", text: "Reconfigured" },
      { id: "C", text: "Reinvented" },
      { id: "D", text: "Transformed" },
    ],
    correctAnswer: "D",
    explanation: "Reinvented industries create totally new products and services (e.g., the autonomous electric car)."
  },
 
  {
    id: 177,
    week: 18,
    topic: "Generic Strategies",
    question: "Cost and quality should be seen as:",
    options: [
      { id: "A", text: "Opposing drivers" },
      { id: "B", text: "Independent of each other" },
      { id: "C", text: "Interrelated and balanced" },
      { id: "D", text: "Relevant only for exporters" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 178,
    week: 18,
    topic: "Generic Strategies",
    question: "Commoditization is a function of:",
    options: [
      { id: "A", text: "Brand and advertising" },
      { id: "B", text: "Level of technology and level of competition" },
      { id: "C", text: "Firm size" },
      { id: "D", text: "Government policy" },
    ],
    correctAnswer: "B",
    explanation: "High technology with low competition gives differentiation with a price premium."
  },
 
  {
    id: 179,
    week: 18,
    topic: "Generic Strategies",
    question: "Differentiation and commoditization are:",
    options: [
      { id: "A", text: "Directly correlated" },
      { id: "B", text: "Unrelated" },
      { id: "C", text: "Identical" },
      { id: "D", text: "Inversely correlated" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 180,
    week: 18,
    topic: "Generic Strategies",
    question: "Niche as a strategy:",
    options: [
      { id: "A", text: "Is only about price" },
      { id: "B", text: "Ignores generic strategies" },
      { id: "C", text: "Draws upon and integrates the other generic strategies" },
      { id: "D", text: "Needs no innovation" },
    ],
    correctAnswer: "C",
    explanation: "Niche products must be kept alive by continuous innovation."
  },
 
  {
    id: 181,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "A fragmented industry is one where:",
    options: [
      { id: "A", text: "A leader sets prices" },
      { id: "B", text: "No firm has significant share or the capability to influence the industry outcome" },
      { id: "C", text: "Only two firms exist" },
      { id: "D", text: "Entry is banned" },
    ],
    correctAnswer: "B",
    explanation: "The Indian generic pharma industry is the example."
  },
 
  {
    id: 182,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "The primary cause of fragmentation, as noted, is:",
    options: [
      { id: "A", text: "High exit barriers" },
      { id: "B", text: "Strong brands" },
      { id: "C", text: "Low entry barriers" },
      { id: "D", text: "Government monopoly" },
    ],
    correctAnswer: "C",
    explanation: "A firm can respond by raising entry barriers through technology or investment."
  },
 
  {
    id: 183,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "A firm in a declining industry with an unfavourable structure and no strengths in residual pockets should:",
    options: [
      { id: "A", text: "Divest quickly" },
      { id: "B", text: "Expand capacity" },
      { id: "C", text: "Raise exit barriers" },
      { id: "D", text: "Seek leadership" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 184,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "Backward integration means integrating:",
    options: [
      { id: "A", text: "Channels" },
      { id: "B", text: "Customers" },
      { id: "C", text: "Vendor or supply sources" },
      { id: "D", text: "Competitors" },
    ],
    correctAnswer: "C",
    explanation: "Forward integration integrates channels."
  },
 
  {
    id: 185,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "Integration is most sustainable in:",
    options: [
      { id: "A", text: "Recessionary markets" },
      { id: "B", text: "Low-volume businesses" },
      { id: "C", text: "Declining industries" },
      { id: "D", text: "Growth markets with high throughput" },
    ],
    correctAnswer: "D",
    explanation: "In recession it becomes a burden."
  },
 
  {
    id: 186,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "Which is listed as an illusion of integration?",
    options: [
      { id: "A", text: "A strong position in one stage automatically extends to another" },
      { id: "B", text: "Integration needs high volume" },
      { id: "C", text: "Asset-light firms exist" },
      { id: "D", text: "Integration can raise entry barriers" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 187,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "“Tax incentives and subsidies” as a cause of overbuilding capacity is a:",
    options: [
      { id: "A", text: "Technological cause" },
      { id: "B", text: "Structural cause" },
      { id: "C", text: "Governmental cause" },
      { id: "D", text: "Managerial cause" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 188,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "Retaliation to diversification is higher when the industry entered has:",
    options: [
      { id: "A", text: "Sunrise technologies" },
      { id: "B", text: "Ill-equipped incumbents" },
      { id: "C", text: "Rising entry barriers" },
      { id: "D", text: "Slow growth and commodity-like products" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 189,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "Strategic comparators and responders differ from competitive benchmarking in that they:",
    options: [
      { id: "A", text: "Use only market share" },
      { id: "B", text: "Use only stock price" },
      { id: "C", text: "Integrate a holistic appraisal of competitors’ strategic plans and execution" },
      { id: "D", text: "Ignore competitors" },
    ],
    correctAnswer: "C",
    explanation: "Benchmarking relies on measurable metrics such as market share, financials and stock price."
  },
 
  {
    id: 190,
    week: 19,
    topic: "Industry Environments and Collaboration",
    question: "Which is NOT one of the five drivers of collaborative value?",
    options: [
      { id: "A", text: "Co-integration" },
      { id: "B", text: "Co-development" },
      { id: "C", text: "Co-fulfillment" },
      { id: "D", text: "Co-merger" },
    ],
    correctAnswer: "D",
    explanation: "The five are co-integration, co-development, co-fulfillment, co-expansion and co-saturation."
  },
 
  {
    id: 191,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "The three facets of innovation are:",
    options: [
      { id: "A", text: "Imagination, visualization, disruption" },
      { id: "B", text: "Planning, budgeting, control" },
      { id: "C", text: "Imitation, standardisation, scaling" },
      { id: "D", text: "Research, sales, service" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 192,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "In the Four Waves of Technology, Wave 4 includes:",
    options: [
      { id: "A", text: "Only mechanical devices" },
      { id: "B", text: "Only electronic devices" },
      { id: "C", text: "Self-learning, digital-mechanical-biological systems (AI, robotics, precision medicine, green tech)" },
      { id: "D", text: "Steam engines" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 193,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "Which is NOT a dimension of technology fluidics?",
    options: [
      { id: "A", text: "Scalability" },
      { id: "B", text: "Transferability" },
      { id: "C", text: "Fidelity" },
      { id: "D", text: "Profitability" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 194,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "Technologies that different stakeholders can creatively access, redefining multiple businesses and industries, are:",
    options: [
      { id: "A", text: "Proprietary technologies" },
      { id: "B", text: "Platform technologies" },
      { id: "C", text: "Failed technologies" },
      { id: "D", text: "Follower technologies" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 195,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "Follower (copycat) technology products depend mainly on:",
    options: [
      { id: "A", text: "Government subsidy" },
      { id: "B", text: "Brand image" },
      { id: "C", text: "Expiry of intellectual property rights" },
      { id: "D", text: "Supplier discounts" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 196,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "For technology competence, a firm should:",
    options: [
      { id: "A", text: "Develop all technologies in-house" },
      { id: "B", text: "Develop a few core technologies organically and access the best of the rest through alliances and licensing" },
      { id: "C", text: "Outsource everything" },
      { id: "D", text: "Avoid patents" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 197,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "The payback from technology investment to final payback can take:",
    options: [
      { id: "A", text: "Under one year" },
      { id: "B", text: "One to two years" },
      { id: "C", text: "Five to twenty years" },
      { id: "D", text: "Over fifty years" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 198,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "Companies like Matsushita and Toyota are described as sceptical of:",
    options: [
      { id: "A", text: "Hands-on research" },
      { id: "B", text: "Western-style market research" },
      { id: "C", text: "Innovation" },
      { id: "D", text: "Quality management" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 199,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "Corning’s distinctive specialisation is in:",
    options: [
      { id: "A", text: "Retail" },
      { id: "B", text: "Software" },
      { id: "C", text: "Logistics" },
      { id: "D", text: "Material technologies" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 200,
    week: 20,
    topic: "Technology Strategy and Innovation",
    question: "Experimental leadership as an innovator strategy:",
    options: [
      { id: "A", text: "Seeks precise commercial goals" },
      { id: "B", text: "Copies rivals" },
      { id: "C", text: "Innovates for innovation’s sake with no precise commercial goal" },
      { id: "D", text: "Focuses on price" },
    ],
    correctAnswer: "C",
    explanation: "The other two innovator strategies are application leadership and experience leadership."
  },
 
  {
    id: 201,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "According to the notes, differentiation is:",
    options: [
      { id: "A", text: "Simply being different" },
      { id: "B", text: "A cumulative customer experience of superiority on attributes chosen by the differentiator" },
      { id: "C", text: "A price cut" },
      { id: "D", text: "Imitation of the leader" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 202,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "Differentiation, as described in the notes, depends mainly on:",
    options: [
      { id: "A", text: "Huge R&D investments" },
      { id: "B", text: "Government subsidy" },
      { id: "C", text: "Large advertising budgets" },
      { id: "D", text: "Perceptive observation" },
    ],
    correctAnswer: "D",
    explanation: "It is a faculty of perceptive observation rather than a function of huge R&D."
  },
 
  {
    id: 203,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "Followers who combine cost leadership with natural improvements:",
    options: [
      { id: "A", text: "Earn healthier returns than cost-only followers" },
      { id: "B", text: "Always lose to innovators" },
      { id: "C", text: "Cannot expand markets" },
      { id: "D", text: "Avoid technology" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 204,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "Which is NOT one of the five competitive technology forces?",
    options: [
      { id: "A", text: "Functionalities" },
      { id: "B", text: "Materials" },
      { id: "C", text: "Ecosystem" },
      { id: "D", text: "Pricing" },
    ],
    correctAnswer: "D",
    explanation: "The five are functionalities, materials, processes, operating system and ecosystem."
  },
 
  {
    id: 205,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "Which generic technology strategy focuses on all five competitive technology forces?",
    options: [
      { id: "A", text: "Functional Technology" },
      { id: "B", text: "Experience Technology" },
      { id: "C", text: "Life Technology" },
      { id: "D", text: "Cost Technology" },
    ],
    correctAnswer: "B",
    explanation: "Functional focuses on select forces, and Life focuses on elevating human life."
  },
 
  {
    id: 206,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "Firms committed to Life Technology Strategy are typically passionate about:",
    options: [
      { id: "A", text: "Cost leadership" },
      { id: "B", text: "Application leadership" },
      { id: "C", text: "Experimental leadership" },
      { id: "D", text: "Followership" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 207,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "Microsoft’s Surface tablets and laptops (high-end materials, OS, processors, ecosystem) illustrate:",
    options: [
      { id: "A", text: "Functional Technology Strategy" },
      { id: "B", text: "Life Technology Strategy" },
      { id: "C", text: "Followership" },
      { id: "D", text: "Experience Technology Strategy" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 208,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "For the same energy, an LED bulb emits about how much more light than an incandescent bulb?",
    options: [
      { id: "A", text: "2 times" },
      { id: "B", text: "20 times" },
      { id: "C", text: "100 times" },
      { id: "D", text: "5 times" },
    ],
    correctAnswer: "B",
    explanation: "It emits four times the light of a fluorescent bulb."
  },
 
  {
    id: 209,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "The Patent Cooperation Treaty (PCT, 1970) allows an applicant up to how long to decide the countries where patent protection is sought?",
    options: [
      { id: "A", text: "12 months" },
      { id: "B", text: "18 months" },
      { id: "C", text: "30 months" },
      { id: "D", text: "60 months" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 210,
    week: 21,
    topic: "Technology Strategy and Innovation",
    question: "Patent rights generally last up to:",
    options: [
      { id: "A", text: "5 years" },
      { id: "B", text: "10 years" },
      { id: "C", text: "15 years" },
      { id: "D", text: "20 years from the filing date" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 211,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "“Smartphone versus feature phone” is an example of:",
    options: [
      { id: "A", text: "Price-driven variation" },
      { id: "B", text: "Performance-driven variation" },
      { id: "C", text: "Category-driven variation" },
      { id: "D", text: "Esteem-driven variation" },
    ],
    correctAnswer: "C",
    explanation: "The five types are category, performance, price, esteem and policy driven."
  },
 
  {
    id: 212,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "Policy-driven variation is the outcome of:",
    options: [
      { id: "A", text: "Consumer taste" },
      { id: "B", text: "Regulatory policy influencing product design" },
      { id: "C", text: "Price points" },
      { id: "D", text: "Brand image" },
    ],
    correctAnswer: "B",
    explanation: "The example is Japan’s 660 cc mini-car preference."
  },
 
  {
    id: 213,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "Google’s 70/20/10 model allocates:",
    options: [
      { id: "A", text: "70% to core, 20% to related projects, 10% to unrelated projects" },
      { id: "B", text: "70% to R&D" },
      { id: "C", text: "70% to marketing" },
      { id: "D", text: "70% to unrelated projects" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 214,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "Google’s unified design approach, revealed in 2014, is called:",
    options: [
      { id: "A", text: "Material Design" },
      { id: "B", text: "Flat Design" },
      { id: "C", text: "Android Look" },
      { id: "D", text: "Pixel Language" },
    ],
    correctAnswer: "A",
    explanation: ""
  },
 
  {
    id: 215,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "Telecommunications and sensors are examples of which kinds of industries, respectively?",
    options: [
      { id: "A", text: "Functional and infrastructure" },
      { id: "B", text: "Infrastructure (platform) and functional (enabler)" },
      { id: "C", text: "Both infrastructure" },
      { id: "D", text: "Both functional" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 216,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "Technological obduracy is:",
    options: [
      { id: "A", text: "Rapid adoption of new technology" },
      { id: "B", text: "A fixation on dated core technologies and reluctance towards new technologies and investments" },
      { id: "C", text: "Open innovation" },
      { id: "D", text: "Patent licensing" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 217,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "Which case illustrates technological obduracy?",
    options: [
      { id: "A", text: "Sony’s attachment to Trinitron CRT televisions" },
      { id: "B", text: "Apple’s iPhone" },
      { id: "C", text: "Google’s Material Design" },
      { id: "D", text: "Zeiss’s eye surgery" },
    ],
    correctAnswer: "A",
    explanation: "The first commercial LCD came from Sharp, and Samsung took pride of place."
  },
 
  {
    id: 218,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "According to the notes, perfection in technological behaviour is:",
    options: [
      { id: "A", text: "A function of scale" },
      { id: "B", text: "A behavioural mindset" },
      { id: "C", text: "Reserved for large firms" },
      { id: "D", text: "Achieved easily" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 219,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "MITI (Japan) was renamed METI in:",
    options: [
      { id: "A", text: "1990" },
      { id: "B", text: "1995" },
      { id: "C", text: "2001" },
      { id: "D", text: "2010" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 220,
    week: 22,
    topic: "Technology and Customer Centricity",
    question: "The second arrow of Abenomics refers to:",
    options: [
      { id: "A", text: "Monetary easing" },
      { id: "B", text: "Structural reforms" },
      { id: "C", text: "Tax cuts only" },
      { id: "D", text: "Sharp fiscal expenditure on high-technology infrastructure" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 221,
    week: 23,
    topic: "Technology and Business",
    question: "Strategic shifts are:",
    options: [
      { id: "A", text: "Routine budget changes" },
      { id: "B", text: "Deliberate moves creating products and services outside a firm’s current strategy" },
      { id: "C", text: "Layoffs" },
      { id: "D", text: "Annual reviews" },
    ],
    correctAnswer: "B",
    explanation: "They are broader in scope than usual competitive strategies."
  },
 
  {
    id: 222,
    week: 23,
    topic: "Technology and Business",
    question: "Reactive strategic shifts need which element to gain advantage over proactive leaders?",
    options: [
      { id: "A", text: "Lower quality" },
      { id: "B", text: "Some element of differentiation" },
      { id: "C", text: "Higher price only" },
      { id: "D", text: "Secrecy" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 223,
    week: 23,
    topic: "Technology and Business",
    question: "Wipro, as an example of sweeping shifts, started in 1945 as:",
    options: [
      { id: "A", text: "An IT firm" },
      { id: "B", text: "A textile firm" },
      { id: "C", text: "A vegetable oil company" },
      { id: "D", text: "A steel company" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 224,
    week: 23,
    topic: "Technology and Business",
    question: "Which is a structural (not strategic) shift?",
    options: [
      { id: "A", text: "From continuity to discontinuity" },
      { id: "B", text: "From established to emerging" },
      { id: "C", text: "From conventional to creative" },
      { id: "D", text: "From distancing to incubation" },
    ],
    correctAnswer: "D",
    explanation: "The other structural shifts are strategic competition to structural collaboration, and in-housing to outsourcing."
  },
 
  {
    id: 225,
    week: 23,
    topic: "Technology and Business",
    question: "The riskiness of integration:",
    options: [
      { id: "A", text: "Falls with technological change" },
      { id: "B", text: "Increases proportionally with the speed of technological change" },
      { id: "C", text: "Is constant" },
      { id: "D", text: "Is unrelated to technology" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 226,
    week: 23,
    topic: "Technology and Business",
    question: "A product-naïve customer buying a smartphone for the first time creates:",
    options: [
      { id: "A", text: "Replacement demand" },
      { id: "B", text: "Competitor demand" },
      { id: "C", text: "Incremental demand" },
      { id: "D", text: "No demand" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 227,
    week: 23,
    topic: "Technology and Business",
    question: "Retro-futurism (the iPhone SE example) means a retro design that:",
    options: [
      { id: "A", text: "Only evokes nostalgia" },
      { id: "B", text: "Brings the latest technologies within the restored contours of the old design" },
      { id: "C", text: "Avoids new technology" },
      { id: "D", text: "Is cheaper only" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 228,
    week: 23,
    topic: "Technology and Business",
    question: "Which is NOT one of the seven objects of innovation?",
    options: [
      { id: "A", text: "Product" },
      { id: "B", text: "Service" },
      { id: "C", text: "Business model" },
      { id: "D", text: "Financial" },
    ],
    correctAnswer: "D",
    explanation: "The seven are product, service, business model, process and technology, organisational, social and environmental."
  },
 
  {
    id: 229,
    week: 23,
    topic: "Technology and Business",
    question: "The TRIZ problem-solving method was developed by:",
    options: [
      { id: "A", text: "Genrich Altshuller" },
      { id: "B", text: "Henry Ford" },
      { id: "C", text: "Michael Porter" },
      { id: "D", text: "Clayton Christensen" },
    ],
    correctAnswer: "A",
    explanation: "It uses 40 principles and 76 standard solutions."
  },
 
  {
    id: 230,
    week: 23,
    topic: "Technology and Business",
    question: "Combining multiple technologies into a single product (e.g., Medrobotics’ Flex Robotic System) is:",
    options: [
      { id: "A", text: "Fundamental innovation" },
      { id: "B", text: "Substitutive innovation" },
      { id: "C", text: "Integrative innovation" },
      { id: "D", text: "Incremental innovation" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 231,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "In June 2021, Reliance announced a $10 billion investment to set up how many giga factories for the new energy ecosystem?",
    options: [
      { id: "A", text: "Two" },
      { id: "B", text: "Three" },
      { id: "C", text: "Four" },
      { id: "D", text: "Six" },
    ],
    correctAnswer: "C",
    explanation: ""
  },
 
  {
    id: 232,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "Bose Frames came from Bose asking “Is a headphone always the right answer?” This led to:",
    options: [
      { id: "A", text: "A cheaper headphone" },
      { id: "B", text: "Closing its research labs" },
      { id: "C", text: "Exiting audio" },
      { id: "D", text: "A new category combining eye protection, wireless headphones and noise cancelling" },
    ],
    correctAnswer: "D",
    explanation: ""
  },
 
  {
    id: 233,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "James Dyson spent about how many years trying to license his dual cyclone concept to incumbents such as Hoover?",
    options: [
      { id: "A", text: "Two" },
      { id: "B", text: "Five" },
      { id: "C", text: "Eight" },
      { id: "D", text: "Twelve" },
    ],
    correctAnswer: "C",
    explanation: "This illustrates the technological obduracy of incumbents."
  },
 
  {
    id: 234,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "Dyson’s planned £2bn+ electric vehicle project (launched in 2016) was:",
    options: [
      { id: "A", text: "Launched in 2021 as planned" },
      { id: "B", text: "Called off in 2019" },
      { id: "C", text: "Sold to Tesla" },
      { id: "D", text: "Converted into a hydrogen car" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 235,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "3M’s “15 percent rule” is part of its:",
    options: [
      { id: "A", text: "Financial reporting" },
      { id: "B", text: "Entrepreneurial workplace culture that encourages employees to explore and generate ideas" },
      { id: "C", text: "Pricing policy" },
      { id: "D", text: "Patent policy" },
    ],
    correctAnswer: "B",
    explanation: ""
  },
 
  {
    id: 236,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "3M’s “30% rule” requires that 30% of each division’s revenue come from products introduced in the last:",
    options: [
      { id: "A", text: "One year" },
      { id: "B", text: "Two years" },
      { id: "C", text: "Four years" },
      { id: "D", text: "Ten years" },
    ],
    correctAnswer: "C",
    explanation: "This is part of 3M’s “and thinking”."
  },
 
  {
    id: 237,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "After GE adopted FastWorks, its processes and policies promoted:",
    options: [
      { id: "A", text: "A waterfall methodology" },
      { id: "B", text: "Centralised decisions only" },
      { id: "C", text: "Siloed units" },
      { id: "D", text: "An agile, iterative and scientific methodology" },
    ],
    correctAnswer: "D",
    explanation: "Decision-making also became decentralised, with the Global Growth Organization created."
  },
 
  {
    id: 238,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "Which is one of DuPont’s three innovative businesses?",
    options: [
      { id: "A", text: "Retail and Consumer" },
      { id: "B", text: "Water and Protection" },
      { id: "C", text: "Banking and Finance" },
      { id: "D", text: "Aerospace and Defence" },
    ],
    correctAnswer: "B",
    explanation: "The others are Electronics & Industrial and Mobility & Materials. DuPont also uses the UN SDGs as guiding principles."
  },
 
  {
    id: 239,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "Nvidia (cofounded in 1993 by Jensen Huang) began by focusing on a single niche:",
    options: [
      { id: "A", text: "Cloud storage" },
      { id: "B", text: "Mobile phones" },
      { id: "C", text: "Powerful chips for graphics in fast-moving video games" },
      { id: "D", text: "Operating systems" },
    ],
    correctAnswer: "C",
    explanation: "It later moved into AI-optimised chips."
  },
 
  {
    id: 240,
    week: 24,
    topic: "Technology, Innovation and Cases",
    question: "The achievements of Steve Jobs rest on two core foundations:",
    options: [
      { id: "A", text: "Simplicity and elegance" },
      { id: "B", text: "Cost and speed" },
      { id: "C", text: "Scale and scope" },
      { id: "D", text: "Secrecy and control" },
    ],
    correctAnswer: "A",
    explanation: ""
  }

];
