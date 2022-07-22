import React from "react";
import "../../../App.scss"
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";
import { TextSlider } from "../../../components/text-slider/text-slider.component";
export class Testimoials extends React.Component {
  constructor() {
    super();

    this.state = {

      testimonials: [
        {
          "postId": 1,
          "id": 1,
          "name": "id labore ex et quam laborum",
          "email": "Eliseo@gardner.biz",
          "designation": "Designer",
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
          "postId": 1,
          "id": 2,
          "name": "quo vero reiciendis velit similique earum",
          "email": "Jayne_Kuhic@sydney.com",
          "designation": "Designer",
          "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
          "postId": 1,
          "id": 3,
          "name": "odio adipisci rerum aut animi",
          "email": "Nikita@garfield.biz",
          "designation": "Designer",
          "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
          "postId": 1,
          "id": 4,
          "name": "alias odio sit",
          "email": "Lew@alysha.tv",
          "designation": "Designer",
          "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
          "postId": 1,
          "id": 5,
          "name": "vero eaque aliquid doloribus et culpa",
          "email": "Hayden@althea.biz",
          "designation": "Designer",
          "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        },
      ]
    };
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/comments')
  //   .then(response=>response.json())
  //   .then(t=>this.setState({testimonials:t}))

  // }

  render() {
    return (
      <div className="landing__testimonials">
        <HeadingSecondary
          text="Testimonials"
          extendedStyle={`heading-secondary--black heading-secondary--1`}
          position="testimonials-past-format" />
        <div className="landing__testimonials__text-slider">
          <TextSlider testimonials={this.state.testimonials} />
          <img alt="circle" className="landing__testimonials__circle landing__testimonials__images" />
          <img alt="sphere" className="landing__testimonials__sphere landing__testimonials__images" />
          <img alt="triangle" className="landing__testimonials__triangle landing__testimonials__images" />
          <img alt="square" className="landing__testimonials__square landing__testimonials__images" />
        </div>
      </div>
    )
  }
}