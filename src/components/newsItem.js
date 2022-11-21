import React, { Component } from 'react'

export default class newsItem extends Component {
  render() {
    let {title,description, image, url}=this.props;
    return (
        <div className="card" style={{width: '18rem', margin:'10px', padding:'10px'}}>
        <img src={image===""?"https://nypost.com/wp-content/uploads/sites/2/2022/11/musk-tough-jobs-comp.jpg?quality=75&strip=all&w=1024":image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title===""?"Title":title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}
