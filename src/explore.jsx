import React, { useState } from 'react';
import Props from './exploreprops';
import './explore.css';

function Explore() {
  const [showExtended, setShowExtended] = useState(false);

  const handleExploreClick = () => {
    setShowExtended(true);
  };

  const handleGoBack = () => {
    setShowExtended(false);
  };

  return (
    <>
      {!showExtended ? (
        <div className="explore">
          <div className="exploretitle">EXPLORE</div>
          <div className="explore1">
            <Props
              journalist="Aditi"
              writeup="The Socioeconomic Implications of Artificial Intelligence: Artificial intelligence (AI) has emerged as a transformative force with profound socioeconomic implications. Its rapid integration into various industries raises questions about job displacement and income inequality. This report examines the potential consequences of AI on employment patterns, highlighting the need for proactive policies to mitigate its negative effects. Furthermore, it explores ethical considerations surrounding AI algorithms and decision-making processes, emphasizing the importance of transparency and accountability. Understanding the multifaceted impact of AI is crucial for policymakers, businesses, and individuals to navigate the evolving landscape and harness its potential for inclusive and sustainable growth."
              email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
              number="tel:123456789"
            />
          </div>
          <div className="explore1">
            <Props
              journalist="Pragyashree"
              writeup="Climate Change and Global Security(A Nexus Analysis): Climate change presents a complex web of challenges, extending beyond environmental impacts. This report delves into the interconnected relationship between climate change and global security. It investigates how rising temperatures, resource scarcity, and environmental degradation fuel conflicts, exacerbate migration patterns, and threaten stability. Moreover, it explores the implications for national security strategies and international cooperation. By recognizing climate change as a security issue, policymakers can develop robust mitigation and adaptation measures, fostering resilience and safeguarding global peace. This analysis emphasizes the imperative of addressing climate change through a comprehensive security lens."
              email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
              number="tel:123456789"
            />
          </div>
          <div className="explore1">
          <Props
            journalist="Vidhi"
            writeup="Exploring the Future of Quantum Computing: Quantum computing has emerged as a revolutionary field with the potential to redefine computational capabilities. This report delves into the principles, advancements, and challenges of quantum computing. It explores the concept of qubits, quantum algorithms, and the anticipated impact on various sectors, including cryptography, optimization, and drug discovery. Additionally, it investigates the technological hurdles and ethical considerations associated with quantum computing, such as data privacy and cybersecurity. Understanding the prospects and limitations of this nascent technology is essential for policymakers, researchers, and industry leaders to harness its immense potential effectively."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Adhiraj"
            writeup="Exploring the Future of Quantum Computing: Quantum computing has emerged as a revolutionary field with the potential to redefine computational capabilities. This report delves into the principles, advancements, and challenges of quantum computing. It explores the concept of qubits, quantum algorithms, and the anticipated impact on various sectors, including cryptography, optimization, and drug discovery. Additionally, it investigates the technological hurdles and ethical considerations associated with quantum computing, such as data privacy and cybersecurity. Understanding the prospects and limitations of this nascent technology is essential for policymakers, researchers, and industry leaders to harness its immense potential effectively."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
          <button onClick={()=> {handleExploreClick(); window.scrollTo(0, 660);}} className="buttonexplore">
            See last 10 posts
          </button>
        </div>
      ) : (
        <Exploreextended handleGoBack={handleGoBack} />
      )}
    </>
  );
}

export default Explore;

function Exploreextended({ handleGoBack }) {

  return (
    <>
      <div className="exploreextended">
        <div className="exploretitle">EXPLORE</div>
        <div className="explore1">
          <Props
            journalist="Aditi"
            writeup="The Socioeconomic Implications of Artificial Intelligence: Artificial intelligence (AI) has emerged as a transformative force with profound socioeconomic implications. Its rapid integration into various industries raises questions about job displacement and income inequality. This report examines the potential consequences of AI on employment patterns, highlighting the need for proactive policies to mitigate its negative effects. Furthermore, it explores ethical considerations surrounding AI algorithms and decision-making processes, emphasizing the importance of transparency and accountability. Understanding the multifaceted impact of AI is crucial for policymakers, businesses, and individuals to navigate the evolving landscape and harness its potential for inclusive and sustainable growth."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Pragyashree"
            writeup="Climate Change and Global Security(A Nexus Analysis): Climate change presents a complex web of challenges, extending beyond environmental impacts. This report delves into the interconnected relationship between climate change and global security. It investigates how rising temperatures, resource scarcity, and environmental degradation fuel conflicts, exacerbate migration patterns, and threaten stability. Moreover, it explores the implications for national security strategies and international cooperation. By recognizing climate change as a security issue, policymakers can develop robust mitigation and adaptation measures, fostering resilience and safeguarding global peace. This analysis emphasizes the imperative of addressing climate change through a comprehensive security lens."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Vidhi"
            writeup="Exploring the Future of Quantum Computing: Quantum computing has emerged as a revolutionary field with the potential to redefine computational capabilities. This report delves into the principles, advancements, and challenges of quantum computing. It explores the concept of qubits, quantum algorithms, and the anticipated impact on various sectors, including cryptography, optimization, and drug discovery. Additionally, it investigates the technological hurdles and ethical considerations associated with quantum computing, such as data privacy and cybersecurity. Understanding the prospects and limitations of this nascent technology is essential for policymakers, researchers, and industry leaders to harness its immense potential effectively."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Adhiraj"
            writeup="Exploring the Future of Quantum Computing: Quantum computing has emerged as a revolutionary field with the potential to redefine computational capabilities. This report delves into the principles, advancements, and challenges of quantum computing. It explores the concept of qubits, quantum algorithms, and the anticipated impact on various sectors, including cryptography, optimization, and drug discovery. Additionally, it investigates the technological hurdles and ethical considerations associated with quantum computing, such as data privacy and cybersecurity. Understanding the prospects and limitations of this nascent technology is essential for policymakers, researchers, and industry leaders to harness its immense potential effectively."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Mumpy"
            writeup="Urbanization and Sustainable Development: Rapid urbanization poses significant challenges to sustainable development. This report analyzes the intricate dynamics between urban growth, environmental sustainability, and quality of life. It explores strategies for creating smart cities that prioritize energy efficiency, green infrastructure, and inclusive urban planning. Additionally, it examines the social and economic implications of urbanization, including housing affordability and social equity. By embracing innovative urban design and fostering community engagement, policymakers and urban planners can steer cities towards sustainable trajectories, ensuring a harmonious balance between growth and livability."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Aryadeep"
            writeup="The Role of Women in STEM(Breaking Barriers, Driving Innovation): Gender disparity in science, technology, engineering, and mathematics (STEM) fields remains a pressing issue. This report explores the multifaceted challenges faced by women in STEM and their significant contributions to scientific innovation. It delves into societal biases, cultural norms, and institutional barriers that hinder women's progress in STEM careers. Moreover, it highlights successful initiatives and policies that promote gender equity and inclusivity in STEM education and workplaces. Recognizing and empowering women in STEM is not only a matter of social justice but also a catalyst for breakthrough discoveries and a more prosperous society."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Meek"
            writeup="Blockchain Technology(Transforming Industries and Enhancing Trust): Blockchain technology has garnered attention for its potential to revolutionize industries and redefine trust mechanisms. This report investigates the fundamental concepts of blockchain, its applications beyond cryptocurrencies, and its implications for sectors such as finance, supply chain management, and healthcare. It explores the benefits of decentralized and transparent systems, addressing concerns related to scalability, privacy, and regulatory frameworks. By harnessing the transformative power of blockchain, organizations can enhance data integrity, streamline operations, and foster a more secure and efficient digital ecosystem."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Priya"
            writeup="The Evolution of E-commerce (Trends, Challenges, and Opportunities): E-commerce has reshaped the retail landscape, challenging traditional business models and revolutionizing consumer behavior. This report analyzes the evolving trends in e-commerce, including the rise of mobile shopping, personalized experiences, and the integration of augmented reality. It also examines the challenges faced by e-commerce platforms, such as cybersecurity threats, logistics complexities, and ethical considerations. Understanding the dynamics of e-commerce enables businesses to adapt, innovate, and leverage emerging opportunities, ensuring a seamless online shopping experience while maintaining consumer trust."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Shagun"
            writeup="Mental Health in the Digital Age: The proliferation of digital technologies has significantly impacted mental health, presenting both opportunities and challenges. This report explores the intersection of mental health and the digital age, examining the effects of social media, online gaming, and digital addiction on well-being. It discusses the potential of telemedicine, mental health apps, and virtual reality therapy as tools for intervention and support. Furthermore, it addresses ethical concerns surrounding data privacy, online counseling, and algorithmic bias. Navigating the complexities of mental health in the digital era requires a holistic approach that balances technological advancements with individual well-being."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <div className="explore1">
          <Props
            journalist="Soumya"
            writeup="Cybersecurity in the Era of Connectivity: The increasing interconnectedness of digital infrastructures has elevated the importance of cybersecurity. This report investigates the evolving cybersecurity landscape, exploring emerging threats such as ransomware, supply chain attacks, and state-sponsored hacking. It delves into the role of artificial intelligence and machine learning in augmenting cyber defenses while also highlighting the ethical considerations surrounding privacy and surveillance. Implementing robust cybersecurity measures is imperative for protecting critical infrastructure, preserving data integrity, and fostering trust in the digital ecosystem."
            email="https://mail.google.com/mail/?view=cm&fs=1&to=abc@example.com"
            number="tel:123456789"
          />
        </div>
        <button onClick={()=> {handleGoBack(); window.scrollTo(0, 660)}} className="buttonexplore">
          See Less
        </button>
      </div>
    </>
  );
}
