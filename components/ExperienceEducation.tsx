import { experienceData, educationData } from '@/data/data';
import SectionTitle from '@/components/SectionTitle';
import TimelineItem from '@/components/TimelineItem';

export default function ExperienceEducation() {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        {/* Experience */}
        <div>
          <SectionTitle>Work Experience</SectionTitle>
          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <TimelineItem 
                key={index}
                period={item.period}
                title={item.title}
                subtitle={item.role} 
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-10">
            {educationData.map((item, index) => (
              <TimelineItem 
                key={index}
                period={item.period}
                title={item.title}
                subtitle={item.institution} 
                description={item.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}