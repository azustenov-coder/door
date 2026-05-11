import MasonryGallery from "@/components/MasonryGallery";

export const metadata = {
  title: "Projects - Invisible Door Systems",
};

export default function ProjectsPage() {
  return (
    <div className="projects-page container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <MasonryGallery />
    </div>
  );
}
