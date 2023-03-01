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
 * the soft skills for people management focused on creating a team culture.
 *
 * This post is a bit philosophical, but it is important to understand the
 * implications of being a leader and the impact you will have on the people around you.
 * While your impact is mostly felt on the people you work with directly,
 * as a leader it will have far reaching effects people around you.
 */
const first_paragraph = WritingService.RequestIntro({
  careerSkill: SkillType.People.Culture,
  valueAdd: ValueAdd.Philosphy,
  displayName: "Your attitude will be reflected in your peers.",
});

/**
 * In the second paragraph we will introduce the reader to the
 * specific context of when this skill is most valuable.
 *
 * acknowledging the impact of your attitude on your peers is always relevant.
 * This is true in meetings, on chats, in code-reviews, in emails, literally everywhere.
 *
 * Your peers will not even realize they are adjusting to your attitude,
 * just as realistically as you do not realize you are adjusting to your peer's atittudes.
 */
const second_paragraph = WritingService.RequestContext({
  projectType: project.all,
  learningCurve: onboardingCost.zero,
});

/**
 * In the third paragraph we will bring up using this for good purposes,
 * such as positivity in the face of confusion, learning from mistakes,
 * and sharing a sense of urgency to make impactful decisions.
 */
const third_paragraph = WritingService.RequestParagraph({
  topic: "Sharing Positivity",
  intro:
    "A metaphor is a figure of speech that uses one thing to mean another and makes a comparison between the two.",
  thesis:
    "Draw parallels with what you can explain well to new creative concepts which you can't explain well.",
  segue:
    "depending on the metaphor and the actual concept to explain, the metaphor will be stretched",
});

/**
 * In the fourth paragraph we will discuss examples of contagious negativity.
 *
 * Poiinting out word choice as well as well as topics of conversations-
 * with the subtlty that negative topics *should not* be avoided, but instead can be
 * communicated in healthy and helpful ways.
 */
const fourth_paragraph = WritingService.RequestParagraph({
  topic: "Sharing Negativity",
  intro:
    "Especially on R&D projecs, there will be new concepts and not many existing parallels.",
  thesis:
    "Use inflection points where the metaphor is stretched to guide discussion towards the nuance and implications of the new work.",
});

/**
 * Remind people that there are many many soft skills and hard skills.
 * They have the opportunity to decide what skills they want to focus on,
 * which will be a reflection of their working environment and values.
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
