import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const Stroke = () => {
    const content = (
        <>
            <p>A brain stroke is a critical emergency where every second counts. When a blood clot blocks an artery in the brain, immediate intervention is required to prevent permanent brain damage. Dr. Kamlesh Talesra specializes in Mechanical Thrombectomy—a highly advanced procedure to rapidly remove the clot.</p>
            <p>In addition to stroke, life-threatening brain aneurysms (weakened, bulging blood vessels) can be treated using Endovascular Coiling. Instead of open brain surgery, specialized platinum coils are navigated through the blood vessels and packed into the aneurysm to seal it off, preventing a catastrophic rupture.</p>
        </>
    );

    const faqs = [
        {
            q: "What is Mechanical Thrombectomy?",
            a: "It is a minimally invasive procedure where a catheter is navigated directly into the brain's blocked artery to physically grab and pull the clot out, instantly restoring blood flow."
        },
        {
            q: "Is there a time limit for stroke treatments?",
            a: "Yes. Time is brain. Mechanical thrombectomy has the highest success rate when performed within the first 6 to 24 hours of symptom onset."
        },
        {
            q: "Is aneurysm coiling safer than clipping?",
            a: "For many patients, endovascular coiling is significantly less invasive than traditional surgical clipping since it avoids opening the skull, leading to quicker recovery and lower complication rates."
        }
    ];

    return (
        <ServiceTemplate
            title="Stroke & Aneurysm Management"
            summary="Emergency mechanical thrombectomy for strokes and endovascular coiling for aneurysms to protect brain function."
            imagePath="images/services/stroke.jpg"
            content={content}
            faqs={faqs}
        />
    );
};

export default Stroke;
