import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [userPrompt, setUserPrompt] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState('');

  const handleQuizSubmit = () => {
    let score = 0;
    if (quizAnswers.q1 === 'b') score++;
    if (quizAnswers.q2 === 'c') score++;
    if (quizAnswers.q3 === 'a') score++;
    
    setQuizSubmitted(true);
    setQuizFeedback(`You scored ${score}/3`);
  };

  const handlePromptChange = (e) => {
    setUserPrompt(e.target.value);
    setShowAnalysis(false);
  };

  const analyzePrompt = () => {
    setShowAnalysis(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Chain-of-Thought Prompt Pattern</h1>
      
      {/* Navigation Tabs */}
      <div className="flex border-b mb-6">
        <button 
          className={`px-4 py-2 ${activeTab === 'introduction' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-t-lg mr-1`}
          onClick={() => setActiveTab('introduction')}>
          Introduction
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'examples' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-t-lg mr-1`}
          onClick={() => setActiveTab('examples')}>
          Examples
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'workshop' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-t-lg mr-1`}
          onClick={() => setActiveTab('workshop')}>
          Workshop
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'quiz' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-t-lg`}
          onClick={() => setActiveTab('quiz')}>
          Quiz
        </button>
      </div>
      
      {/* Introduction Section */}
      {activeTab === 'introduction' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">What is Chain-of-Thought?</h2>
          <p>Chain-of-Thought (CoT) is a prompt engineering technique that encourages AI models to break down complex reasoning tasks into a series of intermediate steps before arriving at a final answer.</p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-2">Core Concepts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Explicit Reasoning Steps:</span> CoT makes the thinking process transparent by showing each logical step.</li>
              <li><span className="font-semibold">Emergent Problem-Solving:</span> Breaking complex problems into manageable steps enhances the model's ability to solve difficult reasoning tasks.</li>
              <li><span className="font-semibold">Self-Monitoring:</span> The step-by-step approach allows the model to catch and correct errors during the reasoning process.</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mt-6">Why Use Chain-of-Thought?</h2>
          <p>When AI models attempt to solve complex problems in a single step, they often make errors in their reasoning. Chain-of-Thought reduces these errors by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improving accuracy on mathematical and logical reasoning tasks by 20-50%</li>
            <li>Making the reasoning process transparent and verifiable</li>
            <li>Enabling models to tackle more complex multi-step problems</li>
            <li>Providing more trustworthy results for high-stakes applications</li>
          </ul>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
            <h3 className="text-xl font-semibold mb-2">Real-World Impact</h3>
            <p>In medical diagnosis assistance, Chain-of-Thought prompting has improved diagnostic accuracy by over 30%. By working through potential diagnoses step-by-step (considering symptoms, risk factors, test results, and differential diagnoses in sequence), AI systems provide more reliable support for healthcare professionals.</p>
          </div>
        </div>
      )}
      
      {/* Examples Section */}
      {activeTab === 'examples' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Chain-of-Thought in Action</h2>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold">Example 1: Mathematical Problem</div>
            <div className="p-4">
              <p className="font-semibold">Problem:</p>
              <p className="bg-gray-50 p-2 rounded my-2">If John has 5 apples and gives 2 to Mary, who then gives half of what she has to Sam, how many apples does Sam have?</p>
              
              <div className="mt-4">
                <p className="font-semibold">Traditional Prompt:</p>
                <p className="bg-gray-50 p-2 rounded my-2">Answer the following question: If John has 5 apples and gives 2 to Mary, who then gives half of what she has to Sam, how many apples does Sam have?</p>
                <p className="italic">Model might directly answer: "Sam has 1 apple."</p>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold">Chain-of-Thought Prompt:</p>
                <p className="bg-gray-50 p-2 rounded my-2">Answer the following question step by step: If John has 5 apples and gives 2 to Mary, who then gives half of what she has to Sam, how many apples does Sam have?</p>
                <div className="bg-blue-50 p-3 rounded mt-2 border-l-4 border-blue-500">
                  <p>Step 1: John starts with 5 apples.</p>
                  <p>Step 2: John gives 2 apples to Mary. John now has 5 - 2 = 3 apples.</p>
                  <p>Step 3: Mary now has 2 apples.</p>
                  <p>Step 4: Mary gives half of her apples to Sam. Half of 2 is 1.</p>
                  <p>Step 5: Mary gives 1 apple to Sam. Mary now has 2 - 1 = 1 apple.</p>
                  <p>Step 6: Sam now has 1 apple.</p>
                  <p className="font-semibold mt-2">Therefore, Sam has 1 apple.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden mt-6">
            <div className="bg-gray-100 p-3 font-semibold">Example 2: Decision-Making Scenario</div>
            <div className="p-4">
              <p className="font-semibold">Scenario:</p>
              <p className="bg-gray-50 p-2 rounded my-2">I have a 30-year mortgage with 25 years remaining at 4.5% interest rate for $350,000. Current rates are 3.8%, and refinancing would cost $6,000 in closing costs. I plan to stay in my home for at least 10 more years. Should I refinance?</p>
              
              <div className="mt-4">
                <p className="font-semibold">Chain-of-Thought Prompt with Guided Steps:</p>
                <p className="bg-gray-50 p-2 rounded my-2">Analyze this refinancing decision by following these steps:<br/>
                1. Calculate my current monthly payment<br/>
                2. Calculate the new monthly payment if I refinance<br/>
                3. Determine the monthly savings<br/>
                4. Calculate how many months it would take to recover the closing costs<br/>
                5. Calculate the total savings over 10 years (after accounting for closing costs)<br/>
                6. Make a recommendation based on the numbers</p>
                
                <div className="bg-blue-50 p-3 rounded mt-2 border-l-4 border-blue-500">
                  <p><strong>Step 1:</strong> Calculate current monthly payment for $350,000 at 4.5% for 25 years.<br/>
                  Monthly payment = $1,954.83</p>
                  
                  <p><strong>Step 2:</strong> Calculate new monthly payment for $350,000 at 3.8% for 25 years.<br/>
                  New monthly payment = $1,814.48</p>
                  
                  <p><strong>Step 3:</strong> Determine monthly savings.<br/>
                  Monthly savings = $1,954.83 - $1,814.48 = $140.35 per month</p>
                  
                  <p><strong>Step 4:</strong> Calculate months to recover closing costs.<br/>
                  Break-even point = $6,000 ÷ $140.35 = 42.75 months (about 3.6 years)</p>
                  
                  <p><strong>Step 5:</strong> Calculate total savings over 10 years after closing costs.<br/>
                  Total savings = ($140.35 × 120 months) - $6,000 = $16,842 - $6,000 = $10,842</p>
                  
                  <p><strong>Step 6:</strong> Make a recommendation.<br/>
                  Since you plan to stay in the home for at least 10 years, which is well beyond the break-even point of 3.6 years, refinancing would save you approximately $10,842 over 10 years. It would be financially beneficial to refinance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Workshop Section */}
      {activeTab === 'workshop' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Chain-of-Thought Workshop</h2>
          <p>Try crafting your own Chain-of-Thought prompt. Enter a problem or scenario and we'll analyze its CoT structure.</p>
          
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block font-medium mb-2">Enter your prompt:</label>
            <textarea
              value={userPrompt}
              onChange={handlePromptChange}
              className="w-full p-2 border rounded h-32"
              placeholder="Example: Solve this math problem step-by-step: If a train travels at 60 mph for 2 hours, then slows to 45 mph for the next 3 hours, what is the total distance traveled?"
            ></textarea>
            
            <button 
              onClick={analyzePrompt}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={!userPrompt}
            >
              Analyze Prompt
            </button>
            
            {showAnalysis && (
              <div className="mt-4 p-3 bg-blue-50 rounded">
                <h3 className="font-semibold text-lg">Prompt Analysis</h3>
                {userPrompt.toLowerCase().includes('step') || userPrompt.toLowerCase().includes('steps') ? (
                  <div>
                    <p className="text-green-600 font-medium">✓ Your prompt contains Chain-of-Thought elements!</p>
                    <div className="mt-2">
                      <p>Your prompt explicitly asks for step-by-step reasoning, which is the core of the Chain-of-Thought pattern.</p>
                      <p className="mt-2">To enhance it further, you could:</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li>Specify exactly which steps you want to see</li>
                        <li>Ask for explanations at each step</li>
                        <li>Request verification of the final answer</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-yellow-600 font-medium">Your prompt doesn't explicitly use Chain-of-Thought structure.</p>
                    <div className="mt-2">
                      <p>To transform this into a Chain-of-Thought prompt, try adding phrases like:</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li>"Solve this step-by-step..."</li>
                        <li>"Work through this problem showing each step in your reasoning..."</li>
                        <li>"Break this down into logical steps and solve each one..."</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold">Best Practices</h3>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Be explicit about requesting step-by-step reasoning</li>
              <li>For complex problems, consider enumerating the specific steps you want to see</li>
              <li>Ask the model to verify its own answers after completing the steps</li>
              <li>For mathematical problems, request that calculations be shown</li>
              <li>Use phrases like "Think step-by-step" or "Let's work through this logically"</li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Quiz Section */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Test Your Knowledge</h2>
          <p>Answer these questions about the Chain-of-Thought prompt pattern:</p>
          
          <div className="space-y-4">
            <div className="p-3 border rounded-lg">
              <p className="font-medium">1. What is the primary purpose of Chain-of-Thought prompting?</p>
              <div className="mt-2 space-y-1">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a" 
                    checked={quizAnswers.q1 === 'a'}
                    onChange={() => setQuizAnswers({...quizAnswers, q1: 'a'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  To make AI responses shorter and more concise
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b" 
                    checked={quizAnswers.q1 === 'b'}
                    onChange={() => setQuizAnswers({...quizAnswers, q1: 'b'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  To break down complex reasoning into explicit intermediate steps
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c" 
                    checked={quizAnswers.q1 === 'c'}
                    onChange={() => setQuizAnswers({...quizAnswers, q1: 'c'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  To make AI responses more creative and varied
                </label>
              </div>
              {quizSubmitted && quizAnswers.q1 === 'b' && (
                <p className="text-green-600 mt-2">✓ Correct! Chain-of-Thought is about making reasoning explicit through intermediate steps.</p>
              )}
              {quizSubmitted && quizAnswers.q1 !== 'b' && (
                <p className="text-red-600 mt-2">✗ Incorrect. Chain-of-Thought is designed to break down complex reasoning into explicit intermediate steps.</p>
              )}
            </div>
            
            <div className="p-3 border rounded-lg">
              <p className="font-medium">2. In what types of problems does Chain-of-Thought tend to be most effective?</p>
              <div className="mt-2 space-y-1">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a" 
                    checked={quizAnswers.q2 === 'a'}
                    onChange={() => setQuizAnswers({...quizAnswers, q2: 'a'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  Simple factual recall questions
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b" 
                    checked={quizAnswers.q2 === 'b'}
                    onChange={() => setQuizAnswers({...quizAnswers, q2: 'b'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  Creative writing tasks
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c" 
                    checked={quizAnswers.q2 === 'c'}
                    onChange={() => setQuizAnswers({...quizAnswers, q2: 'c'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  Multi-step reasoning tasks like math problems and logical puzzles
                </label>
              </div>
              {quizSubmitted && quizAnswers.q2 === 'c' && (
                <p className="text-green-600 mt-2">✓ Correct! Chain-of-Thought excels at complex reasoning tasks that require multiple steps.</p>
              )}
              {quizSubmitted && quizAnswers.q2 !== 'c' && (
                <p className="text-red-600 mt-2">✗ Incorrect. Chain-of-Thought is most effective for multi-step reasoning tasks like mathematical problems and logical puzzles.</p>
              )}
            </div>
            
            <div className="p-3 border rounded-lg">
              <p className="font-medium">3. Which phrase best encourages Chain-of-Thought reasoning?</p>
              <div className="mt-2 space-y-1">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a" 
                    checked={quizAnswers.q3 === 'a'}
                    onChange={() => setQuizAnswers({...quizAnswers, q3: 'a'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  "Solve this problem step-by-step, showing your work."
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b" 
                    checked={quizAnswers.q3 === 'b'}
                    onChange={() => setQuizAnswers({...quizAnswers, q3: 'b'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  "Give me a concise answer to this question."
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c" 
                    checked={quizAnswers.q3 === 'c'}
                    onChange={() => setQuizAnswers({...quizAnswers, q3: 'c'})}
                    disabled={quizSubmitted}
                    className="mr-2"
                  />
                  "Respond with only the final answer."
                </label>
              </div>
              {quizSubmitted && quizAnswers.q3 === 'a' && (
                <p className="text-green-600 mt-2">✓ Correct! Asking for step-by-step working explicitly encourages Chain-of-Thought reasoning.</p>
              )}
              {quizSubmitted && quizAnswers.q3 !== 'a' && (
                <p className="text-red-600 mt-2">✗ Incorrect. "Solve this problem step-by-step, showing your work" is the phrase that best encourages Chain-of-Thought reasoning.</p>
              )}
            </div>
          </div>
          
          {!quizSubmitted ? (
            <button 
              onClick={handleQuizSubmit}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={!quizAnswers.q1 || !quizAnswers.q2 || !quizAnswers.q3}
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-4 p-3 bg-blue-50 rounded text-center">
              <p className="font-semibold text-lg">{quizFeedback}</p>
              {quizFeedback.includes('3') ? (
                <p className="text-green-600 mt-2">Excellent! You have a strong understanding of the Chain-of-Thought pattern.</p>
              ) : quizFeedback.includes('2') ? (
                <p className="text-blue-600 mt-2">Good job! You understand the basics of Chain-of-Thought prompting.</p>
              ) : (
                <p className="text-blue-600 mt-2">Consider reviewing the material to better understand Chain-of-Thought prompting.</p>
              )}
            </div>
          )}
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold">Exercise: Apply Chain-of-Thought</h3>
            <p className="mt-2">Try applying the Chain-of-Thought pattern to this scenario:</p>
            <p className="p-2 bg-white rounded mt-2">A small business is considering expanding to a new location. The new space costs $4,000/month in rent, would require $50,000 in renovation costs, and they estimate they could generate $15,000/month in revenue there with $6,000/month in additional operating costs. Should they expand?</p>
            <p className="mt-3">Create a Chain-of-Thought prompt that would help an AI model thoroughly analyze this business decision.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;