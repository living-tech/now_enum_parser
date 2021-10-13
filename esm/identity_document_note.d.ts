export declare enum IdentityDocumentNote {
    AddressIsNotSpecified = "AddressIsNotSpecified",
    Blurred = "Blurred",
    ContainsIndividualNumber = "ContainsIndividualNumber",
    CopyOrScannedData = "CopyOrScannedData",
    Expired = "Expired",
    FailedRandomnessCheck = "FailedRandomnessCheck",
    MismatchedData = "MismatchedData",
    MismatchedDocument = "MismatchedDocument",
    MismatchedDocumentSides = "MismatchedDocumentSides",
    MismatchedFace = "MismatchedFace",
    MissingAddress = "MissingAddress",
    MissingIndividualNumber = "MissingIndividualNumber",
    MissingIssuer = "MissingIssuer",
    MissingThickness = "MissingThickness",
    NoFace = "NoFace",
    NotHoldDocument = "NotHoldDocument",
    NotHuman = "NotHuman",
    OutOfFrame = "OutOfFrame",
    PartlyHidden = "PartlyHidden",
    WrongDocument = "WrongDocument",
    Other = "Other"
}
export declare const identityDocumentNoteEncoder: (raw: IdentityDocumentNote, lang: import("./index").Language) => string;
export declare const identityDocumentNoteDecoder: (text: string, lang: import("./index").Language) => IdentityDocumentNote;
