import React from 'react';
import styles, { layout } from '../../../../style';
import FAQCard from './FAQCard';
import Button from '../../../../components/Buttons/Button';

export const quesAnsAns = [
    {
        id: "1",
        Ques: "What is an online code editor?",
        Ans: "An online code editor is a web-based tool that allows users to write, edit, and run code directly in a browser, without the need for any local software or installations."

    },
    {
        id: "2",
        Ques: "What languages are supported in this online code editor?",
        Ans: "Coderstackbox support HTML, CSS, JavaScript."

    },
    {
        id: "3",
        Ques: "Is there a cost associated with using an online code editor?",
        Ans: "Coderstackbox is free to use."

    },
    {
        id: "4",
        Ques: "Can I save and download my code from the online editor?",
        Ans: "Yes, coderstackbox allow users to save their code online, either by creating an account "

    },
    {
        id: "5",
        Ques: "Can I run my code on an online code editor?",
        Ans: "Yes, User can run their code directly to the online browser."

    },
    {
        id: "6",
        Ques: "Are there any additional features or resources provided to help me learn the language or troubleshoot my code?",
        Ans: "Yes, coderstackbox has some special features that helps users to find errors in their code."

    },
];
const FAQ = () => {
    return (
        <div>
            <section className={`${layout.sectionCol}`}>
                <div className="container px-6 py-12 mx-auto">
                    <div className={`${layout.sectionInfo} text-center`}>
                        <h1 className={`${styles.heading2} text-white`}>Frequently asked questions.</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                        {
                            quesAnsAns.map(q => <FAQCard
                                key={q.id}
                                q={q}
                            ></FAQCard>)
                        }
                    </div>
                </div>
                <div className='flex flex-col'>
                    <textarea className="textarea textarea-bordered mb-2 max-w-lg bg-gradient-to-r from-accent to-secondary text-white" placeholder="Question"></textarea>
                    <Button styles={'w-56'} htmlFor="my-modal-3">Ask A Question</Button>
                </div>
            </section>
        </div>
    );
};

export default FAQ;