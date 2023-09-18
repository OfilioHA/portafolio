import { HeroSection } from "@/components/home/HeroSection";
import { RepositoriesSection } from "@/components/home/RepositoriesSection";
import { Repository, PublicRepository } from "@/database/models";

export default async function Home() {

  const repositories = await Repository.findAll({
    include: [PublicRepository],
    where: {
      state: true
    },
    raw: true,
    nest: true
  });

  return (
    <>
      <HeroSection />
      <RepositoriesSection repositories={repositories} />
    </>
  )
}
