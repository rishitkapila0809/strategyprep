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
    question: "Which of the following is not an external threat for a typical company?",
    options: [
      { id: "A", text: "Aggressive actions of its competitors" },
      { id: "B", text: "Growth of the global economy" },
      { id: "C", text: "Capital induction from investors and shareholders" },
      { id: "D", text: "External talent wanting to enter the company" }
    ],
    correctAnswer: "C",
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
    correctAnswer: "C",
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
    correctAnswer: "B",
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
  }
];
