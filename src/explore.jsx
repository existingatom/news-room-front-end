import Props from './exploreprops'
import './explore.css'

function explore() {
    const Submit = () => { alert('going to explore!') }
    return (<>
        <div className="explore">
            <div className="exploretitle">EXPLORE</div>
            <div className="explore1"><Props journalist="Aditi" writeup="The Socioeconomic Implications of Artificial Intelligence: Artificial intelligence (AI) has emerged as a transformative force with profound socioeconomic implications. Its rapid integration into various industries raises questions about job displacement and income inequality. This report examines the potential consequences of AI on employment patterns, highlighting the need for proactive policies to mitigate its negative effects. Furthermore, it explores ethical considerations surrounding AI algorithms and decision-making processes, emphasizing the importance of transparency and accountability. Understanding the multifaceted impact of AI is crucial for policymakers, businesses, and individuals to navigate the evolving landscape and harness its potential for inclusive and sustainable growth." email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com" number="tel:123456789" /></div>
            <div className="explore1"><Props journalist="Pragyashree" writeup="Climate Change and Global Security(A Nexus Analysis) :  Climate change presents a complex web of challenges, extending beyond environmental impacts. This report delves into the interconnected relationship between climate change and global security. It investigates how rising temperatures, resource scarcity, and environmental degradation fuel conflicts, exacerbate migration patterns, and threaten stability. Moreover, it explores the implications for national security strategies and international cooperation. By recognizing climate change as a security issue, policymakers can develop robust mitigation and adaptation measures, fostering resilience and safeguarding global peace. This analysis emphasizes the imperative of addressing climate change through a comprehensive security lens." email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com" number="tel:123456789" /></div>
            <button onClick={Submit} className="buttonexplore">See last 10 posts</button>
        </div>
    </>
    );
}

export default explore
