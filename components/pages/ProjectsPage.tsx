"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";

const statusColors: Record<string, { bg: string; text: string }> = {
  "In Progress": { bg: "rgba(251,191,36,0.1)", text: "#fbbf24" },
  Selesai: { bg: "rgba(52,211,153,0.1)", text: "#34d399" },
  Berlangsung: { bg: "rgba(96,165,250,0.1)", text: "#60a5fa" },
};

export default function ProjectsPage() {
  const skillGroups = [
    { label: "Pemrograman", skills: skillsData.programming },
    { label: "Machine Learning", skills: skillsData.machineLearning },
    { label: "Web Development", skills: skillsData.webDev },
    { label: "Kepemimpinan", skills: skillsData.leadership },
    { label: "Soft Skills", skills: skillsData.softSkills },
  ];

  return (
    <section style={{ minHeight: "100vh", padding: "8rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <AnimatedSection>
          <div style={{ marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "0.75rem",
              }}
            >
              Proyek
            </p>
            <h1
              style={{
                fontFamily: "var(--font-lora, serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
                lineHeight: "1.25",
                marginBottom: "1rem",
              }}
            >
              Setiap proyek punya cerita.
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: "1.8",
                maxWidth: "520px",
              }}
            >
              Orang membaca alasan — bukan hanya teknologi. Di sini saya
              berbagi latar belakang, proses, dan pelajaran dari setiap karya.
            </p>
          </div>
        </AnimatedSection>

        {/* Project cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4rem" }}>
          {projectsData.map((project, index) => {
            const statusColor = statusColors[project.status] || statusColors["In Progress"];
            return (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <article
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: "14px",
                    padding: "2rem",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-border-subtle)")
                  }
                >
                  {/* Meta row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      flexWrap: "wrap",
                      marginBottom: "0.875rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.2rem 0.625rem",
                        borderRadius: "100px",
                        backgroundColor: statusColor.bg,
                        color: statusColor.text,
                        border: `1px solid ${statusColor.bg}`,
                      }}
                    >
                      {project.status}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-faint)",
                      }}
                    >
                      {project.category} · {project.year}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-lora, serif)",
                      fontSize: "1.25rem",
                      color: "var(--color-text)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.title}
                  </h2>

                  {/* Story */}
                  <p
                    style={{
                      fontFamily: "var(--font-lora, serif)",
                      fontSize: "0.9375rem",
                      color: "var(--color-text-muted)",
                      lineHeight: "1.85",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.story}
                  </p>

                  {/* Problem / Solution / Reflection */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                      gap: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {[
                      { label: "Masalah", value: project.problem },
                      { label: "Solusi", value: project.solution },
                      { label: "Refleksi", value: project.reflection },
                    ].map((item) => (
                      <div
                        key={item.label}
                        style={{
                          backgroundColor: "var(--color-surface-2)",
                          borderRadius: "8px",
                          padding: "0.875rem",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.6875rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--color-text-faint)",
                            marginBottom: "0.375rem",
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--color-text-muted)",
                            lineHeight: "1.6",
                            fontStyle: "italic",
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Skills section */}
        <AnimatedSection>
          <div
            style={{
              borderTop: "1px solid var(--color-border-subtle)",
              paddingTop: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text-faint)",
                marginBottom: "1.75rem",
              }}
            >
              Keterampilan
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-faint)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {group.label}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.375rem",
                    }}
                  >
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
