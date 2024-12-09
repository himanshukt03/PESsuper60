import React from 'react';

const StudentKSAAnalysisReport: React.FC = () => {
  return (
    <div className="font-roboto text-gray-800">
      <div className="container mx-auto p-6">
        <div className="bg-black text-white py-6 text-center">
          <h1 className="text-3xl font-semibold">STUDENT KSA ANALYSIS REPORT</h1>
          <p>PES COLLEGE OF ENGINEERING, MANDYA</p>
          <p>REPORT BY: INUNITY LLP</p>
        </div>

        <div className="my-8 space-y-4">
          <p>You were assessed on 3 key areas: Knowledge, Skill, and Personality.</p>
          <p>
            Your behavioural assessment showcases your general temperament and natural tendencies
            which will help you understand what environments you will thrive in, followed by aptitude
            and coding assessments categorized by companies, to help you understand where you
            currently stand and the steps you must take to improve.
          </p>
          <p>
            Your combination of Influence and Steadiness makes you a dynamic, reliable individual who
            excels in communication and relationship-building.
          </p>
          <p>
            You have a strong foundation and are performing well across all categories. Keep up the
            great work and aim for continuous improvement to achieve even higher levels of performance.
          </p>
        </div>

        <div className="flex justify-between items-start my-8">
          <div>
            <p>
              <strong>Name:</strong> PRIYA DHARSHINI
            </p>
            <p>
              <strong>Branch:</strong> COMPUTER SCIENCE ENGINEERING
            </p>
            <p>
              <strong>Semester:</strong> VI
            </p>
            <p>
              <strong>USN:</strong> 4SF12EC100
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-blue-600 font-semibold text-xl">Total Score</h2>
            <h3 className="text-2xl font-bold">24/50</h3>
            <p>L2 (Above Average)</p>
          </div>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="bg-gray-100 px-4 py-2 border-l-4 border-blue-600 font-semibold text-lg">
            1. DISC PERSONALITY TEST
          </h2>
          <div className="my-6 space-y-4">
            <p>
              The DISC test presents a series of questions asking participants to select traits or
              behaviors that resonate most and least with them. Based on responses, a personalized
              profile is generated, highlighting the dominant DISC style and secondary traits. This
              creates a unique "DISC Personality DNA" for each person.
            </p>
          </div>

          <div className="flex flex-wrap justify-between my-8">
            <div className="w-full md:w-1/4 p-2 text-center">
              <div className="mx-auto mb-4">
                {/* Placeholder for pie chart */}
                <svg className="w-36 h-36 mx-auto" viewBox="0 0 36 36">
                  {/* Pie chart can be implemented using SVG or an image */}
                  {/* This is just a placeholder circle */}
                  <circle cx="18" cy="18" r="18" fill="#e2e8f0" />
                </svg>
              </div>
              <h4 className="font-semibold">DISC Distribution</h4>
              <p>Steadiness: 40%</p>
              <p>Influence: 30%</p>
              <p>Dominance: 30%</p>
              <p>Conscientiousness: 10%</p>
              <p className="mt-2 text-sm">
                Your specific distribution of scores on the DISC personality test is an indication of
                your unique personality. You can think of this as your DISC Personality 'DNA'. In the
                pie chart you see your distribution of scores.
              </p>
            </div>
            <div className="w-full md:w-1/4 p-2">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Steadiness</h4>
                <p>
                  <strong>Key Traits:</strong> You are supportive, reliable, and calm. You value
                  stability and consistency and thrive in environments where you can build long-term
                  relationships and provide steady, dependable support to others.
                </p>
                <p>
                  <strong>Strengths:</strong> You are dependable and calm under pressure, excelling in
                  maintaining long-term relationships. You are a supportive team player.
                </p>
                <p>
                  <strong>Challenges:</strong> You might resist change and struggle to make quick
                  decisions under pressure. You may also avoid conflict and passivity in
                  decision-making.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-2">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Influence</h4>
                <p>
                  <strong>Key Traits:</strong> You are sociable, optimistic, and enthusiastic.
                  Building connections and engaging with people energizes you. You enjoy motivating
                  others and creating an uplifting atmosphere wherever you go.
                </p>
                <p>
                  <strong>Strengths:</strong> You excel in communication, relationship-building, and
                  motivation. You have a creative and persuasive nature, making you an effective
                  influencer.
                </p>
                <p>
                  <strong>Challenges:</strong> You might struggle with organization, become overly
                  optimistic, and sometimes lack follow-through on commitments.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-2">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Dominance</h4>
                <p>
                  <strong>Key Traits:</strong> You are assertive, goal-oriented, and competitive. You
                  are driven to achieve results and thrive in situations where quick decisions are
                  needed. You don't shy away from challenges and are eager to take risks to get ahead.
                </p>
                <p>
                  <strong>Strengths:</strong> You have strong leadership abilities and a drive to
                  achieve results. You make quick decisions and take calculated risks.
                </p>
                <p>
                  <strong>Challenges:</strong> You may come across as blunt or aggressive, sometimes
                  overlooking details or others' feelings. You can also be impatient with slow
                  processes or people who aren't results-driven.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="bg-gray-100 px-4 py-2 border-l-4 border-blue-600 font-semibold text-lg">
            2. APTITUDE ASSESSMENT
          </h2>
          <div className="my-6 space-y-4">
            <p>
              You participated in an aptitude assessment to evaluate your cognitive abilities and
              identify your strengths and areas for development. The assessment covered verbal
              reasoning, logical problem-solving, and quantitative aptitude. Note, Aptitude is not
              equivalent to IQ. Your aptitude can be developed over time through practice.
            </p>
          </div>

          <table className="w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Aptitude Area</th>
                <th className="border p-2 text-left">Complexity Level Scores</th>
                <th className="border p-2 text-left">Performance Indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Quantitative Aptitude</td>
                <td className="border p-2">L1: 3/3, L2: 4/8, L3: 3/6</td>
                <td className="border p-2">
                  You've demonstrated a solid grasp of quantitative reasoning and problem-solving.
                  Keep refining your skills for even greater efficiency and speed in tackling complex
                  problems.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Verbal Aptitude</td>
                <td className="border p-2">L1: 4/5, L2: 2/4, L3: 3/6</td>
                <td className="border p-2">
                  You've displayed strong verbal reasoning abilities, understanding complex texts and
                  articulating ideas clearly. Continue to expand your vocabulary and comprehension to
                  stay sharp.
                </td>
              </tr>
              <tr>
                <td className="border p-2">Logical Aptitude</td>
                <td className="border p-2">L1: 0/0, L2: 2/6, L3: 3/12</td>
                <td className="border p-2">
                  You've shown good logical reasoning abilities, applying sound strategies to solve
                  problems efficiently. Keep challenging yourself with more complex logical problems
                  to boost your skills even further.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 p-4 rounded mb-8">
            <h3 className="text-center font-semibold text-xl mb-2">Career Potential</h3>
            <p className="text-center">You're most likely suited for:</p>
            <ul className="list-disc list-inside">
              <li>
                Mid-level technical roles (software engineer, product manager) at MAANG
              </li>
              <li>Mid-level roles (analyst, system engineer) at GCCS</li>
              <li>Mid-level roles (developer, consultant) at GSIs</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="bg-gray-100 px-4 py-2 border-l-4 border-blue-600 font-semibold text-lg">
            3. KNOWLEDGE ASSESSMENT
          </h2>
          <div className="my-6 space-y-4">
            <p>
              You were given a total of 16 questions to attempt as per your personal goals. Each test
              had varying complexity levels, tailored to the requirements of different company
              categories: MAANG, GCCs, GSIs, and others to align with the increasing expectations of
              different company types.
            </p>
          </div>

          <table className="w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Particulars</th>
                <th className="border p-2 text-left">Total Score</th>
                <th className="border p-2 text-left">Level of Proficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">MAANG</td>
                <td className="border p-2">10/10</td>
                <td className="border p-2">L4</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">GCCs</td>
                <td className="border p-2">1/10</td>
                <td className="border p-2">L1</td>
              </tr>
              <tr>
                <td className="border p-2">GCCs/GSI</td>
                <td className="border p-2">2/10</td>
                <td className="border p-2">L2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Basic</td>
                <td className="border p-2">1/10</td>
                <td className="border p-2">L1</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Overall Score</td>
                <td className="border p-2 font-semibold">4.8/10</td>
                <td className="border p-2 font-semibold">L2</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 p-4 rounded mb-8">
            <h3 className="text-center font-semibold text-xl mb-2">Career Recommendation</h3>
            <p>
              You are most likely to fit into entry-level roles in global capability centers. Your
              foundational algorithmic knowledge indicates readiness to contribute and grow with
              mentorship in a dynamic environment.
            </p>
            <p>
              <strong>Recommended Band:</strong> GCC
            </p>
            <p>
              <strong>Proficiency Level:</strong> Level 2
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="bg-gray-100 px-4 py-2 border-l-4 border-blue-600 font-semibold text-lg">
            4. CODING ASSESSMENT
          </h2>
          <div className="my-6 space-y-4">
            <p>
              You attempted coding challenges divided across 4 complexity levels mapped to different
              company bands. These questions were designed keeping in mind the requirements of
              various roles in each band of companies. Your final score will be calculated by the
              completeness of your code and its ability to pass all the test cases.
            </p>
          </div>

          <table className="w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Range of Score</th>
                <th className="border p-2 text-left">Level of Proficiency</th>
                <th className="border p-2 text-left">Descriptor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">0 - 8 points</td>
                <td className="border p-2">Level 1</td>
                <td className="border p-2">
                  Focus on building fundamental skills and tackling more complex algorithms.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">9 - 22 points</td>
                <td className="border p-2">Level 2</td>
                <td className="border p-2">
                  Strong candidate with room for growth, focusing on refining optimization and
                  solving more challenging problems.
                </td>
              </tr>
              <tr>
                <td className="border p-2">23 - 46 points</td>
                <td className="border p-2">Level 3</td>
                <td className="border p-2">
                  Solid fit for mid-level roles with further improvement needed in optimization and
                  advanced algorithms.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">47 - 70 points</td>
                <td className="border p-2">Level 4</td>
                <td className="border p-2">
                  Strong candidate for technical roles, demonstrating high proficiency and the
                  ability to handle real-world challenges.
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Set</th>
                <th className="border p-2 text-left">Marks Scored</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">L1</td>
                <td className="border p-2">8/8</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">L2</td>
                <td className="border p-2">6/14</td>
              </tr>
              <tr>
                <td className="border p-2">L3</td>
                <td className="border p-2">8/24</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">L4</td>
                <td className="border p-2">8/24</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Total Score</td>
                <td className="border p-2 font-semibold">30/70</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 p-4 rounded mb-8">
            <h3 className="text-center font-semibold text-xl mb-2">Coding Assessment Insights</h3>
            <p>
              You are showing strong problem-solving skills and a deeper understanding of algorithms.
              You've tackled more challenging problems like circular sentences and string shifts,
              indicating that you can handle advanced coding tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentKSAAnalysisReport;