window.PART_DATA_8 = {
    title: "Deaf Children’s Ad Hoc Language Evolves and Instructs",
    instructions: "You are going to read an article about children. For questions 47–56, choose from the sections of the article (A–E). The sections may be chosen more than once. When more than one answer is required, these may be given in any order.",
    questionTitle: "In which section of the article is the following mentioned?",
    passage: `
        <div id="section-A" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section A</h4>
            <p>A deep insight into the way the brain learns language has emerged from the study of Nicaraguan sign language, invented by deaf children in a Nicaraguan school as a means of communicating among themselves. The Nicaraguan children are well-known to linguists because they provide an apparently unique example of people inventing a language from scratch. The phenomenon started at a school for special education founded in 1977. Instructors noticed that the deaf children, while absorbing little from their Spanish lessons, had developed a system of signs for talking to one another. As one generation of children taught the system to the next, it evolved from a set of gestures into a far more sophisticated form of communication, and today’s 800 users of the language provide a living history of the stages of formation.</p>
        </div>
        
        <div id="section-B" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section B</h4>
            <p>The children have been studied principally by Dr. Judy Kegl, a linguist at the University of Southern Maine, and Dr. Ann Senghas, a cognitive scientist at Columbia University in New York City. In the latest study, published in <i>Science</i> magazine, Dr. Senghas shows that the younger children have now decomposed certain gestures into smaller component signs. A hearing person asked to mime a standard story about a cat waddling down a street will make a single gesture, a downward spiral motion of the hand. But the deaf children have developed two different signs to use in its place. They sign a circle for the rolling motion and then a straight line for the direction of movement. This requires more signing, but the two signs can be used in combination with others to express different concepts. The development is of interest to linguists because it captures a principal quality of human language – discrete elements usable in different combinations – in contrast to the one sound, one meaning of animal communication. ‘The regularity she documents here – mapping discrete aspects of the world onto discrete word choices – is one of the most distinctive properties of human language’ said Dr. Steven Pinker, a cognitive scientist at Harvard University.</p>
        </div>
        
        <div id="section-C" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section C</h4>
            <p>When people with no common language are thrown into contact, they often develop an <i>ad hoc</i> language known to linguists as a <i>pidgin</i> language, usually derived from one of the parent languages. <i>Pidgins</i> are rudimentary systems with minimal grammar and utterances. But in a generation or two, the <i>pidgins</i> acquire grammar and become upgraded to what linguists call <i>creoles</i>. Though many new languages have been created by the <i>pidgin-creole</i> route, the Nicaraguan situation is unique, Dr. Senghas said, because its starting point was not a complex language but ordinary gestures. From this raw material, the deaf children appear to be spontaneously fabricating the elements of language.</p>
        </div>
        
        <div id="section-D" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section D</h4>
            <p>Linguists have been engaged in a longstanding argument as to whether there is an innate, specialised neural machinery for learning language, as proposed by Noam Chomsky of the Massachusetts Institute of Technology, or whether everything is learned from scratch. Dr. Senghas says her finding supports the view that language learning is innate, not purely cultural, since the Nicaraguan children’s dis-aggregation of gestures appears to be spontaneous. Her result also upholds the idea that children play an important part in converting a <i>pidgin</i> into a <i>creole</i>. Because children’s minds are primed to learn the rules of grammar, it is thought, they spontaneously impose grammatical structure on a <i>pidgin</i> that doesn’t have one.</p>
        </div>

        <div id="section-E" style="margin-bottom: 25px;">
            <h4 style="color: #000000; font-size: 17px; margin-bottom: 8px;">Section E</h4>
            <p>The Nicaraguan children are a living laboratory of language generation. Dr. Senghas, who has been visiting their school every year since 1990, said she had noticed how the signs for numbers have developed. Originally the children represented ’20’ by flicking the fingers of both hands in the air twice. But this cumbersome sign has been replaced with a form that can now be signed with one hand. The children don’t care that the new sign doesn’t look like a 20, Dr. Senghas said; they just want a symbol that can be signed fast.</p>
        </div>
    `,
    questions: [
        {
            number: 47,
            prompt: "an example of a sign that has become simpler",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 4,
            explanation: "47 E. Section E mentions the sign for '20' changing from flicking fingers of both hands twice to a simpler one-handed sign."
        },
        {
            number: 48,
            prompt: "the difference between how the deaf children communicate an image and how other people communicate the same image",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 1,
            explanation: "48 B. Section B contrasts a hearing person miming a cat waddling with a single spiral gesture versus deaf children using two separate signs (circle and straight line)."
        },
        {
            number: 49,
            prompt: "the fact that the same signs can be used in the communication of a number of ideas",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 1,
            explanation: "49 B. Section B mentions that 'the two signs can be used in combination with others to express different concepts'."
        },
        {
            number: 50,
            prompt: "the characteristics of languages in general at different stages of their development",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 2,
            explanation: "50 C. Section C describes pidgins as rudimentary systems with minimal grammar and creoles as upgraded versions with grammar."
        },
        {
            number: 51,
            prompt: "a belief that language is learnt by means of a specific part of the mind",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 3,
            explanation: "51 D. Section D refers to Noam Chomsky's proposal of an 'innate, specialised neural machinery for learning language'."
        },
        {
            number: 52,
            prompt: "an aspect of language learning that children are particularly good at",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 3,
            explanation: "52 D. Section D states that 'children’s minds are primed to learn the rules of grammar' and spontaneously impose structure."
        },
        {
            number: 53,
            prompt: "how regularly the children have been monitored",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 4,
            explanation: "53 E. Section E notes that Dr. Senghas 'has been visiting their school every year since 1990'."
        },
        {
            number: 54,
            prompt: "older children passing their sign language on to younger children",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 0,
            explanation: "54 A. Section A mentions 'As one generation of children taught the system to the next'."
        },
        {
            number: 55,
            prompt: "the reason why the children created a particular sign",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 4,
            explanation: "55 E. Section E explains that the children 'just want a symbol that can be signed fast'."
        },
        {
            number: 56,
            prompt: "opposing views on how people acquire language",
            options: ["Section A", "Section B", "Section C", "Section D", "Section E"],
            answer: 3,
            explanation: "56 D. Section D describes the longstanding debate between language being innate versus learned from scratch."
        }
    ]
};
