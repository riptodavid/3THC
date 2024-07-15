function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showPhase(phaseId) {
    const phases = {
        phase1: "Complete website and social media launch. Initial token distribution and listing on exchanges.",
        phase2: "Expand marketing efforts and partnerships. Increase community engagement through events and promotions.",
        phase3: "List on additional exchanges and integrate with more DeFi platforms. Launch staking and farming features.",
        phase4: "Achieve widespread adoption and continue development based on community feedback. Regularly update the roadmap to reflect new goals."
    };
    
    document.getElementById('roadmap-details').innerHTML = `<p>${phases[phaseId]}</p>`;
}
