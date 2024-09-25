// 15 enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var documentOne = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: "silver" },
};
var documentTwo = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ["silver", "krishna"],
};
var documentThree = {
    uid: 3,
    resourceName: ResourceType.FILM,
    data: false,
};
console.log(documentOne, documentTwo, documentThree);
