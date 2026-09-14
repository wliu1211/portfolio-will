import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

const projects = [
    {
        name: "Multimodal Object Detection", 
        className: "six", 
        icon: <i className="fa-solid fa-object-group"></i>, 
        description: "Zero-shot multimodal detection using SAM3's object segmentation library by Facebook. It can identify all the objects given a user's query given by an image uploaded by the user as well.", 
        skills: ["Python", "SAM3", "Computer Vision"], 
        github: "",  
        category: ["ai"]
    },
    {
        name: "PCOS Detection System", 
        className: "five", 
        icon: <i className="fa-solid fa-laptop-code"></i>, 
        description: "A machine learning project that contains various predictive models for early detection of Polycystic Ovary Syndrome using datasets of various parameters. Plots and graphs were used to identify any significant features or trends in the dataset to have the models learn from.", 
        skills: ["Python", "Kaggle"], 
        github:"https://github.com/wliu1211/nyu-dsbc-project",  
        category: ["ai"]
    },
    {
        name: "AI Health Assistant", 
        className: "seven", 
        icon: <i className="fa-solid fa-heart-pulse"></i>, 
        description: "It tracks users diet's macros (calories, carbs, fats, proteins) and exercise information and it will generate a health score for the user. It has an AI online coach that makes it easy for users to add food to their meal plan or diet if they tell the AI to do so. It basically tracks your diet and plans meals for you. It also has a chatbot that can answer questions about the app and the user's health.", 
        skills: ["React", "Node", "Vite", "OpenAi", "PostgreSQL"], 
        github:"https://github.com/Mirap9615/health-motivator", 
        category: ["web", "ai"]
    },
    {
        name: "Cryptocurrency Tracker", 
        className: "three", 
        icon: <i className="fa-brands fa-bitcoin"></i>,  
        description: "A fullstack Crypto Tracker application that displays the stats of various cryptocurrency that is fetched from the Coingecko API. The user can see the charts of the crypto market price. They can also make watchlists that is saved into the database.", 
        skills: ["React", "Node", "Express", "MongoDB"], 
        github:"https://github.com/wliu1211/crypto-tracker",  
        category: ["web"]
    },
]

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animating, setAnimating] = useState(false);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeCategory)
          : project.category === activeCategory
      );
    
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTimeout(() => {
        setAnimating(false);
      }, 100);
    }, 300);
  };

  return (
    <section id="projects">
        <div className="project-header-container">
            <h1 className="projects-header">Projects</h1>
            <div className="header-border"></div>
        </div>
        
        <div className="projects-filter">
            <div className="filter-toggle">
                <button 
                    className={activeCategory === 'all' ? 'active' : ''} 
                    onClick={() => handleCategoryChange('all')}
                >
                    All Projects
                </button>
                <button 
                    className={activeCategory === 'web' ? 'active' : ''} 
                    onClick={() => handleCategoryChange('web')}
                >
                    Web Development
                </button>
                <button 
                    className={activeCategory === 'ai' ? 'active' : ''} 
                    onClick={() => handleCategoryChange('ai')}
                >
                    AI/ML
                </button>
            </div>
        </div>
        
        <div className={`cards-container ${animating ? 'fade-out' : 'fade-in'}`}>
            {filteredProjects.map((project, index)=> (
                <ProjectCard 
                    key={`${activeCategory}-${index}`}
                    index={index}
                    project={project}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects