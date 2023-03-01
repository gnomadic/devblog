function main() {
  console.log(first_paragraph);
  console.log("\n");
  console.log(second_paragraph);
  console.log("\n");
  console.log(third_paragraph);
  console.log("\n");
  console.log(fourth_paragraph);
  console.log("\n");
  console.log(fifth_paragraph);
}
/**
 * Welcome the reader with human english, this post is about:
 *
 * the soft skill for people management focused on collaboration
 * More specifically tactical thoughts and information on how to
 * bring everyone along for the ride.
 *
 * We will be discussing using metaphors as a tool to guide discussion and thinking.
 *
 */
const first_paragraph = WritingService.RequestIntro({
  careerSkill: SkillType.People.Collaboration,
  valueAdd: ValueAdd.tool,
  displayName: "Using metaphors to guide discussions",
});

/**
 * In the second paragraph we will introduce the reader to the
 * specific context of when this skill is most valuable.
 *
 * Bringing everyone along for the ride is a skill that is
 * most impactful on highly creative and highly risky R&D style
 * projects, however it will be appreciated on all projects.
 * Engineering projects are often highly technical and
 * have an associated complexity that is difficult to communicate.
 * As such, the onboarding cost for new team members is high.
 * This cost is paid in "mental energy" (which requires a clear mind for focus)
 * as well as in "time" and "priorities".
 *
 */
// TODO dig into "costs" data model and implications, learningCurve isn't the right abstraction here, track #issue-2
const second_paragraph = WritingService.RequestContext({
  projectType: project.creative,
  learningCurve: onboardingCost.high,
});

/**
 * In the third paragraph we will bring up metaphors as a tool.
 */
const third_paragraph = WritingService.RequestParagraph({
  topic: "Metaphors",
  intro:
    "A metaphor is a figure of speech that uses one thing to mean another and makes a comparison between the two.",
  thesis:
    "Draw parallels with what you can explain well to new creative concepts which you can't explain well.",
  segue:
    "depending on the metaphor and the actual concept to explain, the metaphor will be stretched",
});

/**
 * In the fourth paragraph we discuss embracing where metaphors fall apart,
 * because if we are working in entirely new domains then someday we will
 * be the metaphor other people use.  Today, unfortunately, there no metaphors for what
 * we are trying to accomplish.
 *
 * @dev: Remember the days of elevator pitches like 'oh it's an uber for cats'?
 * Now everyone knows about the product "Catsatrophe" and uses it as a metaphor.
 */
const fourth_paragraph = WritingService.RequestParagraph({
  topic: "Stretching Metaphors",
  intro:
    "Especially on R&D projecs, there will be new concepts and not many existing parallels.",
  thesis:
    "Use inflection points where the metaphor is stretched to guide discussion towards the nuance and implications of the new work.",
});

/**
 * Remind people that there are many many soft skills and hard skills.
 * They have the opportunity to decide what skills they want to focus on,
 * which will be a reflection of their working environment and values.
 *
 * Metaphors are one tool to help with one skill that I personally find helpful.
 */
const fifth_paragraph = WritingService.RequestInsightfulConclusion({
  deepness: level.very_deep,
  skill: soft.collaboration.ridealong,
  topics: ["Metaphors", "Stretching Metaphors"],
});

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
