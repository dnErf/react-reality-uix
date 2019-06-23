import { UNSPLASH_ENDPOINT } from '../config'

import React, { Component } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from './Image'


class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  }
  componentDidMount() {
    const { count, start } = this.state
    axios
      .get(`${UNSPLASH_ENDPOINT}&count=${count}&start=${start}`)
      .then((res) => this.setState({ images: res.data }))
  }
  fetchImages = () => {
    const { count, start, images } = this.state
    this.setState({ start: start + count })
    axios
      .get(`${UNSPLASH_ENDPOINT}&count=${count}&start=${start}`)
      .then((res) => this.setState({ images: images.concat(res.data) }))
  }
  render() {
    return (
      <div className="images">
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}

export default Images