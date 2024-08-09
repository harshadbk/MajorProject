import React, { Component } from 'react';
import Newsitem from './newsitem';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=b987869345984dbfaea0c0e06289708e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ 
            articles: parsedata.articles,
            totalarticles:parsedata.totalResults
        });
        console.log(parsedata);
    }

    handlenextclick = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalarticles/this.props.pagesize)){
        }
        else{
        console.log(this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=b987869345984dbfaea0c0e06289708e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles,
            page: this.state.page + 1
        });
    }
    }

    handleprevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b987869345984dbfaea0c0e06289708e&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles,
            page: this.state.page - 1
        });
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>ABP MAZA Top Headlines</h1>
                <br />
                <br />
                <div className="row">
                    {this.state.articles && this.state.articles.length > 0 ? (
                        this.state.articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <Newsitem
                                    title={element.title ? element.title : "No Title"}
                                    description={element.description ? element.description.slice: "No Description"}
                                    imgurl={element.urlToImage || element.imgurl}
                                    className="card-img-top"
                                    newsurl={element.url}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <br />
                <br />
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalarticles/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}