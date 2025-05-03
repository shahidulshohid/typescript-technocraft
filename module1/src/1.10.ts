{
    //union type
    // type FrontendDeveloper = "fakibazDeveloper" | "frontendDeveloper" 
    // type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper"

    // type developer = FrontendDeveloper | FullStackDeveloper

    // const newDeveloper : FrontendDeveloper = "fakibazDeveloper"

    // type User = {
    //     name: string;
    //     email: string;
    //     gender: "male" | "female";
    //     bloodGroup: "O+" | "A+" | "AB+"
    // }

    // const user : User = {
    //     name: "shahidul",
    //     email: "shahdiul@.com",
    //     gender: "male",
    //     bloodGroup: "O+",
    // }

    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend  Developer" | ""
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer"
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper
    const fullStackDeveloper : FullStackDeveloper = {
        skills: ["HTML", "CSS", "JS", "mongodb", "express"],
        designation1: "Frontend  Developer",
        designation2: "Backend Developer",
    }


}