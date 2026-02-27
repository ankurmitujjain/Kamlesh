import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const Prostate = () => {
    const content = (
        <>
            <p>Benign Prostatic Hyperplasia (BPH) is a common condition as men age, manifesting as an enlarged prostate that causes frustrating urinary symptoms like frequent nighttime trips to the bathroom, weak stream, and difficulty starting urination.</p>
            <p>Prostate Artery Embolization (PAE) offers a cutting-edge relief. Dr. Kamlesh Talesra performs this procedure by inserting a microscopic catheter through the wrist or groin into the arteries supplying the prostate. Safe embolization particles are used to temporarily reduce blood flow, safely starving the overgrown prostate tissue and causing it to shrink without the severe sexual side effects associated with traditional surgery like TURP.</p>
        </>
    );

    const faqs = [
        {
            q: "Will PAE affect my sexual function?",
            a: "One of the major benefits of PAE compared to traditional scraping surgery (TURP) is the vastly reduced risk of sexual side effects such as retrograde ejaculation or erectile dysfunction."
        },
        {
            q: "Do I need a catheter after the procedure?",
            a: "Most patients who undergo PAE do not require a urinary catheter following the procedure, and recovery is much faster."
        },
        {
            q: "How long does the procedure take?",
            a: "The PAE procedure typically takes around 2 hours, and patients are usually able to go home the very same day."
        }
    ];

    return (
        <ServiceTemplate
            title="Prostate Artery Embolization"
            summary="Painless, outpatient relief for enlarged prostate (BPH) symptoms without the risks of traditional surgery."
            imagePath="images/hero.png" // Placeholder
            content={content}
            faqs={faqs}
        />
    );
};

export default Prostate;
