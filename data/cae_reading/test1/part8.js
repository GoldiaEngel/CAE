window.PART_DATA_8 = {
    title: "Reviews of Environmental Books",
    instructions: "You are going to read an article containing reviews of five books on environmental conservation. For questions 47–56, choose from the sections (A–E). The sections may be chosen more than once.",
    questionTitle: "In which section does the reviewer mention",
    passage: `
        <div id="section-A" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section A: Rewilding the Mind by Clara Hughes</h4>
            <p>Clara Hughes presents an impassioned defense of large-scale ecosystem restoration in her groundbreaking new work. Drawing on extensive field observations in the Scottish Highlands, Hughes demonstrates how reintroducing apex predators can trigger cascading ecological benefits throughout degraded landscapes. What sets this book apart from other ecological texts is its accessible prose and engaging storytelling, making complex ecological food-web dynamics understandable for general readers. Although some agricultural interest groups have voiced strong opposition to her policy proposals, Hughes addresses these concerns directly with empirical data, arguing convincingly that ecological restoration and sustainable farming can peacefully coexist.</p>
        </div>
        
        <div id="section-B" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section B: Oceans in Crisis by David Sterling</h4>
            <p>David Sterling's authoritative study delivers a sobering assessment of marine pollution and overfishing across global oceanic basins. Packed with meticulous statistics and oceanographic maps, the book offers an unvarnished look at the plight of coral reefs and pelagic fish populations. However, the sheer volume of technical jargon and dense tabular data may occasionally overwhelm non-specialist readers. Nevertheless, for environmental policymakers, marine biologists, and academic researchers seeking a comprehensive baseline dataset on oceanic health, Sterling's work is an indispensable reference that will undoubtedly shape marine conservation policy for decades.</p>
        </div>
        
        <div id="section-C" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section C: The Urban Wilderness by Dr. Maya Lin</h4>
            <p>In this captivating volume, Dr. Maya Lin shifts the ecological spotlight away from remote nature reserves toward the surprisingly biodiverse micro-habitats thriving inside modern metropolitan areas. From green rooftops in Chicago to abandoned railway corridors in London, Lin explores how flora and fauna adapt to artificial urban environments. The narrative is richly illustrated with vivid photography and personal anecdotes, offering a surprisingly optimistic outlook on the future of urban biodiversity. Lin argues persuasively that fostering urban green spaces is vital not only for wildlife conservation but also for enhancing human psychological well-being.</p>
        </div>
        
        <div id="section-D" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section D: Silent Forest by Julian Vance</h4>
            <p>Julian Vance delivers an emotionally charged investigation into the illegal timber trade devastating tropical rainforests across Southeast Asia. Vance spent three years undercover alongside local forest guards, documenting the clandestine supply chains that funnel rare hardwood into international furniture markets. The book reads like an investigative thriller, combining personal courage with sharp investigative journalism. Vance does not shy away from exposing political corruption and corporate complicity, making this a harrowing yet essential read for anyone concerned with environmental justice and indigenous rights.</p>
        </div>

        <div id="section-E" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section E: Climate Futures by Professor Rachel Croft</h4>
            <p>Professor Rachel Croft offers a balanced, interdisciplinary analysis of climate mitigation strategies for the coming century. Rather than focusing solely on technological interventions like carbon capture, Croft highlights the crucial role of indigenous land stewardship and traditional ecological knowledge. While the author acknowledges the immense challenges ahead, her tone remains fundamentally constructive, outlining actionable policy frameworks for renewable energy transitions. This visionary work bridges the gap between academic research and practical climate action, offering a roadmap for sustainable global governance.</p>
        </div>
    `,
    questions: [
        {
            number: 47,
            prompt: "a book that may be too technical for non-expert readers?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 1
        },
        {
            number: 48,
            prompt: "an author who went undercover to investigate illegal activities?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 3
        },
        {
            number: 49,
            prompt: "the positive impact of nature on human mental health?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 2
        },
        {
            number: 50,
            prompt: "a book that directly addresses criticism from opponents?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 0
        },
        {
            number: 51,
            prompt: "the importance of traditional knowledge in climate solutions?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 4
        },
        {
            number: 52,
            prompt: "a focus on wildlife surviving in artificial human-made environments?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 2
        },
        {
            number: 53,
            prompt: "a publication that will serve as a key reference for policymakers?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 1
        },
        {
            number: 54,
            prompt: "an investigation into international supply chains and political corruption?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 3
        },
        {
            number: 55,
            prompt: "how reintroducing key species can benefit an entire ecosystem?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 0
        },
        {
            number: 56,
            prompt: "a constructive framework for transitioning to renewable energy?",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 4
        }
    ]
};
