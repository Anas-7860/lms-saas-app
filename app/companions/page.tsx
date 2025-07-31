import CompanionCard from "@/components/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import SearchBar from "@/components/SearchBar";
import SubjectFilter from "@/components/SubjectFilter";
const ComapnionsLibrary= async({searchParams}:SearchParams) => {
  const filters =  await searchParams;
  const subject = filters.subject?filters.subject:'';
  const topic = filters.topic?filters.topic:'';

  const companions = await getAllCompanions({subject,topic});

  return (
  <main>
    <section className="flex justify-center gap-4 max:sm:flex-col">
      <h1>Companion Library</h1>
      <div className="flex gap-4">
        <SearchBar/>
        <SubjectFilter/>
      </div>
    </section>
    <section className="companions-grid">
      {companions.map((companion)=>{
        return <CompanionCard key={companion.id}{...companion}
        color={getSubjectColor(companion.subject)}/>
      })}
    </section>
  </main>
  )
}

export default ComapnionsLibrary