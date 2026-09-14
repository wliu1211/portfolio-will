import React, { useState, useEffect } from 'react'
import "./Skills.css"
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  const [activeSkillSet, setActiveSkillSet] = useState('web');
  
  useEffect(() => {
    Aos.init({duration: 1500});
    Aos.refresh();
  }, []);
  
  return (
    <div id="skills">
      <div className="skills-header-container" data-aos="fade-out">
        <h1 className="skills-header">Skills</h1>
        <div className="header-border"></div>
      </div>
      
      <div className="skills-tabs-container">
        <button 
          className={`skills-tab ${activeSkillSet === 'web' ? 'active' : ''}`}
          onClick={() => setActiveSkillSet('web')}
        >
          <i className="fa-solid fa-code"></i>
          <span>Web Development</span>
        </button>
        <button 
          className={`skills-tab ${activeSkillSet === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveSkillSet('ai')}
        >
          <i className="fa-solid fa-brain"></i>
          <span>ML/AI</span>
        </button>
      </div>
      
      {activeSkillSet === 'web' && (
        <div className="skills-container web-skills">
          <div className='front-container' data-aos="fade-right">
            <div className="front-header">
              <h3>Frontend Skills</h3>
            </div>
            <div className="front-body">
              <div className="body-wrapper">
                <div className="list-wrapper html">
                  <i className="fa-brands fa-html5"></i>
                  <p className='front-list'>HTML</p>
                </div>
                <div className="list-wrapper css">
                  <i className="fa-brands fa-css3-alt"></i>
                  <p className='front-list'>CSS</p>
                </div>
                <div className="list-wrapper javascript">
                  <i className="fa-brands fa-square-js"></i>
                  <p className='front-list'>Javascript</p>
                </div>
                <div className="list-wrapper react">
                  <i className="fa-brands fa-react"></i>
                  <p className='front-list'>React</p>
                </div>
                <div className="list-wrapper bootstrap">
                  <i className="fa-brands fa-bootstrap"></i>
                  <p className='front-list'>Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="back-container" data-aos="fade-down">
            <div className="back-header">
              <h3>Backend Skills</h3>
            </div>
            <div className="back-body">
              <div className="body-wrapper">
                <div className="list-wrapper node">
                  <i className="fa-brands fa-node"></i>
                  <p className='back-list'>Node</p> 
                </div>
                <div className="list-wrapper webSockets">
                  <i className="fa-solid fa-plug"></i>
                  <p className='back-list'>Web Sockets</p>
                </div>
                <div className="list-wrapper apis">
                  <i className="fa-solid fa-gear"></i>
                  <p className='back-list'>APIs</p>
                </div>
                <div className="list-wrapper mongo">
                  <i className="fa-solid fa-database"></i>
                  <p className='back-list'>MongoDB</p>
                </div>
                <div className="list-wrapper fastapi">
                  <i className="fa-solid fa-bolt"></i>
                  <p className='back-list'>FastAPI</p>
                </div>
                <div className="list-wrapper python">
                  <i className="fa-brands fa-python"></i>
                  <p className='back-list'>Python</p>
                </div>
                <div className="list-wrapper postgres">
                  <i className="fa-solid fa-database"></i>
                  <p className='back-list'>PostgreSQL / SQLite</p>
                </div>
                <div className="list-wrapper docker">
                  <i className="fa-brands fa-docker"></i>
                  <p className='back-list'>Docker</p>
                </div>
              </div>
            </div>
          </div>
          <div className="other-container" data-aos="fade-left">
            <div className="other-header">
              <h3>Other Skills</h3>
            </div>
            <div className="other-body">
              <div className="body-wrapper">
                <div className="list-wrapper github">
                  <i className="fa-brands fa-github"></i>
                  <p className='back-list'>GitHub</p>
                </div>
                <div className="list-wrapper pytest">
                  <i className="fa-solid fa-vial"></i>
                  <p className='back-list'>Pytest</p>
                </div>
                <div className="list-wrapper latex">
                  <i className="fa-solid fa-superscript"></i>
                  <p className='back-list'>LaTeX</p>
                </div>
                <div className="list-wrapper cpp">
                  <i className="fa-solid fa-code"></i>
                  <p className='back-list'>C++</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSkillSet === 'ai' && (
        <div className="skills-container ai-skills">
          <div className='ml-container' data-aos="fade-right">
            <div className="ml-header">
              <h3>Machine Learning</h3>
            </div>
            <div className="ml-body">
              <div className="body-wrapper">
                <div className="list-wrapper pytorch">
                  <i className="fa-solid fa-fire"></i>
                  <p className='ml-list'>PyTorch</p>
                </div>
                <div className="list-wrapper tensorflow">
                  <i className="fa-solid fa-brain"></i>
                  <p className='ml-list'>TensorFlow</p>
                </div>
                <div className="list-wrapper huggingface">
                  <i className="fa-solid fa-face-smile"></i>
                  <p className='ml-list'>Hugging Face Transformers</p>
                </div>
                <div className="list-wrapper opencv">
                  <i className="fa-solid fa-eye"></i>
                  <p className='ml-list'>OpenCV</p>
                </div>
                <div className="list-wrapper matplotlib">
                  <i className="fa-solid fa-chart-area"></i>
                  <p className='ml-list'>Matplotlib / Seaborn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-container" data-aos="fade-down">
            <div className="ai-header">
              <h3>AI Integration</h3>
            </div>
            <div className="ai-body">
              <div className="body-wrapper">
                <div className="list-wrapper claude">
                  <i className="fa-solid fa-comments"></i>
                  <p className='ml-list'>Claude / Anthropic API</p>
                </div>
                <div className="list-wrapper rag">
                  <i className="fa-solid fa-layer-group"></i>
                  <p className='ml-list'>RAG</p>
                </div>
                <div className="list-wrapper vectordb">
                  <i className="fa-solid fa-database"></i>
                  <p className='ml-list'>Vector DBs</p>
                </div>
                <div className="list-wrapper mcp">
                  <i className="fa-solid fa-network-wired"></i>
                  <p className='ml-list'>MCP</p>
                </div>
                <div className="list-wrapper whisper">
                  <i className="fa-solid fa-microphone"></i>
                  <p className='ml-list'>Whisper</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tools-container" data-aos="fade-left">
            <div className="tools-header">
              <h3>MLOps / Infrastructure</h3>
            </div>
            <div className="tools-body">
              <div className="body-wrapper">
                <div className="list-wrapper aws">
                  <i className="fa-brands fa-aws"></i>
                  <p className='ml-list'>AWS (EC2, S3)</p>
                </div>
                <div className="list-wrapper cuda">
                  <i className="fa-solid fa-microchip"></i>
                  <p className='ml-list'>CUDA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skills