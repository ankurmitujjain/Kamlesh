import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const Vascular = () => {
    const content = (
        <>
            <p>Peripheral artery disease (PAD) restricts blood flow to the limbs, causing pain, non-healing ulcers, and in severe cases, the risk of gangrene and amputation. Interventional radiology offers life-saving solutions through Angioplasty and Stenting.</p>
            <p>Through a tiny pinhole in the groin or wrist, Dr. Talesra guides a tiny balloon into the blocked artery to widen it and restore blood flow. A stent may then be placed to keep the artery open. This preserves the limb and drastically improves the patient’s quality of life without the need for major vascular bypass surgery.</p>
        </>
    );

    const faqs = [
        {
            q: "Can this prevent amputation?",
            a: "Yes. Angioplasty is highly effective at re-establishing blood flow to ischemic limbs, often saving legs from amputation due to severe diabetic foot ulcers or gangrene."
        },
        {
            q: "How long does a stent last?",
            a: "Modern stents are designed to last for a lifetime, though patients must maintain a healthy lifestyle and take prescribed medications to prevent future blockages."
        },
        {
            q: "Do I need to stay in the hospital?",
            a: "Typically, this procedure requires only a short 1-2 day hospital stay for observation, compared to the week-long recovery often necessary for bypass surgery."
        }
    ];

    return (
        <ServiceTemplate
            title="Vascular Interventions"
            summary="Life-saving angioplasty and stenting to restore blood flow, prevent amputations, and manage peripheral vascular disease."
            imagePath="images/hero.png" // Placeholder
            content={content}
            faqs={faqs}
        />
    );
};

export default Vascular;
