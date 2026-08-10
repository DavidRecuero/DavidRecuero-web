import { skillsData } from '@/data/cv';
import SectionTitle from '@/components/SectionTitle';

export default function Skills() {
  return (
    <section className="mb-20">
      <SectionTitle>Skills & Technologies</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {skillsData.map((group, index) => (
          <div key={index}>
            <h3 className="text-xs text-primary uppercase mb-3 font-semibold">{group.category}</h3>
            <ul className="space-y-2 text-sm text-secondary">
              {group.items.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}