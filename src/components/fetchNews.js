import React, { Component } from 'react'
import NewsItem from './newsItem'
export default class fetchNews extends Component {
  
  constructor()
  {
    super();
    this.state = {
      article:[]};
  }
  async componentDidMount(){
let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f56fdeb2e65c42a2bc1487cf085d43d2";
    let articles = await fetch(url);
    let data = await articles.json();
    this.setState({article : data.articles});
  }
 
  render() {
    
    return (
      <div className='container my-3'>
        <div className='row'>
          {
            this.state.article.map((element)=>{
              return <div className='col-md-3' key={element.url}>
              <NewsItem title={element.title} description={element.description} image={element.urlToImage} url={element.url}/>
              </div>
            })
         
  }
  <div className='container d-flex justify-content-between'>
    <button disabled={this.state.page<=1} className="btn btn-primary btn-sm" onClick={this.handlePrev}>&laquo; Previous</button>
    <button className="btn btn-primary btn-sm" onClick={this.handleNext}>Next &raquo;</button>
  </div>
        </div>
        </div>
    )
  }
}
