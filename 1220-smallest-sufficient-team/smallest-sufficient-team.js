/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skillBit = req_skills.reduce((acc, skill, i) => {
        acc[skill] = 1 << i;
        return acc;
    }, {});

    const targetSkills = (1 << req_skills.length) - 1;
    const dp = new Array(targetSkills + 1).fill(null);
    dp[0] = [];

    for (let i = 0; i < people.length; i++) {
        const personSkills = people[i];
        const personBitmask = personSkills.reduce((acc, skill) => {
            return acc | skillBit[skill];
        }, 0);

        for (let j = 0; j <= targetSkills; j++) {
            if (!dp[j]) continue;

            const new_skills = j | personBitmask;
            if (!dp[new_skills] || dp[new_skills].length > dp[j].length + 1) {
                dp[new_skills] = [...dp[j], i];
            }
        }
    }

    return dp[targetSkills];
};