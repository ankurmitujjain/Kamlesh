import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const Fibroid = () => {
    const content = (
        <>
            <p>Uterine fibroids are common, non-cancerous tumors that develop in or on the uterus during childbearing years. They can cause heavy menstrual bleeding, pelvic pain, and frequent urination. Historically, women suffering from symptomatic fibroids had limited options, often requiring a hysterectomy.</p>
            <p>Uterine Fibroid Embolization (UFE) is a revolutionary, non-surgical alternative performed by Interventional Radiologists like Dr. Kamlesh Talesra. Through a tiny pinhole in the groin or wrist, a catheter is guided to the arteries feeding the fibroids. Tiny particles are injected to block the blood flow, causing the fibroids to shrink naturally and symptoms to resolve.</p>
        </>
    );

    const faqs = [
        {
            q: "Does UFE preserve the uterus?",
            a: "Yes! Unlike a hysterectomy, UFE is a targeted treatment that preserves the uterus. Many women who wish to retain their organ for personal or fertility reasons choose UFE."
        },
        {
            q: "Is it a major surgery?",
            a: "No. UFE is a minimally invasive procedure performed without general anesthesia. It requires no incisions, no stitches, and typically only an overnight hospital stay."
        },
        {
            q: "When will I see results?",
            a: "Many women notice a significant reduction in heavy bleeding during their very next menstrual cycle, with continued improvement as the fibroids shrink over the following months."
        }
    ];

    return (
        <ServiceTemplate
            title="Uterine Fibroid Embolization"
            summary="Non-surgical preservation of the uterus, effectively treating heavy bleeding and pain caused by fibroids."
            imagePath="images/services/fibroid.png"
            content={content}
            faqs={faqs}
        />
    );
};

export default Fibroid;
