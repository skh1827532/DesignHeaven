import React from "react";
import "../../../App.scss"
import { useEffect, useState } from "react";
import { projectFirestore } from "../../../Firebase/firebase-config";
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";
import { LongCardList } from "../../../components/long_card-list/long_card-list.component";

import { useAuthContext } from "../../../Hooks/useAuthContext";


export const DashboardDesigner = () => {

    const [competitions, setcompetitions] = useState([])

    var temparray = []
    const { user } = useAuthContext()

    useEffect(() => {

        projectFirestore.collection("Competitions").where("winner", "==", false)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    temparray.push({...doc.data(),docid:doc.id})
                });
            }).catch((error) => {
                console.log(error)
            })
            .then(() => {
                setcompetitions(temparray)
            })
            .then(()=>{
                temparray = []
            })
    }, [])

    return (
        <div className="dashboard--designer">
            <div className="dashboard--designer__header u-margin-bottom-small">
                {
                    user
                    &&
                    <HeadingSecondary
                        text={user.email}
                        extendedStyle={`heading-secondary--black heading-secondary--2`}
                        position="testimonials-past-format" />
                }
                <HeadingSecondary
                    text="Dashboard"
                    extendedStyle={`heading-secondary--black heading-secondary--1`}
                    position="testimonials-past-format" />



            </div>
            <HeadingSecondary
                text="New Competitions"
                extendedStyle={`heading-secondary--black heading-secondary--2`}
                position="testimonials-past-format" />
            <LongCardList competitions={competitions} />
        </div>
    )
}

// const competitions = [
//     {
//         id: 1,
//         mainLogo: "https://robohash.org/as11d",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 2,
//         mainLogo: "https://robohash.org/asasdd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 3,
//         mainLogo: "https://robohash.org/asdasd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 4,
//         mainLogo: "https://robohash.org/asasdd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 5,
//         mainLogo: "https://robohash.org/asffd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 6,
//         mainLogo: "https://robohash.org/aasdsd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 7,
//         mainLogo: "https://robohash.org/asssd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 8,
//         mainLogo: "https://robohash.org/aswed",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 9,
//         mainLogo: "https://robohash.org/as11d",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 10,
//         mainLogo: "https://robohash.org/asasdd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 11,
//         mainLogo: "https://robohash.org/asdasd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 12,
//         mainLogo: "https://robohash.org/asasdd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 13,
//         mainLogo: "https://robohash.org/asffd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 14,
//         mainLogo: "https://robohash.org/aasdsd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 15,
//         mainLogo: "https://robohash.org/asssd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 16,
//         mainLogo: "https://robohash.org/aswed",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 17,
//         mainLogo: "https://robohash.org/as11d",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 18,
//         mainLogo: "https://robohash.org/asasdd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 19,
//         mainLogo: "https://robohash.org/asdasd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
//     {
//         id: 20,
//         mainLogo: "https://robohash.org/asasdd",
//         title: "Design Competition",
//         types: [
//             {
//                 id: 0,
//                 text: "Logo Design"
//             },
//             {
//                 id: 1,
//                 text: "Mockups"
//             }
//         ],
//         client: "Moez Ahmad",
//         details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//         hours: "13",
//         entries: "10",
//     },
// ]
