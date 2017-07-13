import React from 'react'


import { Thumbnail } from 'react-bootstrap';

class SingleGridCell extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      expanded: false,
      selected_id: '',
      window_width: window.innerWidth
    }
  }

  cellClick (event) {
    this.props.handleCellClick(event)
  }

  render () {
    var SingleGridCellStyle = {
      width: this.props.cellSize,
      height: this.props.cellHeight,
      display: 'inline-block',
      margin: this.props.cellMargin,
      marginTop: this.props.cellMargin + 25,
      position: 'relative',
      verticalAlign: 'top',
    }

    var thumbNailStyle = {
      width: this.props.cellSize,
      height: this.props.cellHeight,
      cursor: "pointer",
    }

    return (
      <li className='SingleGridCell' style={SingleGridCellStyle}  id={this.props.id}  onClick={this.cellClick.bind(this)}>
        <div>
            <Thumbnail src={(this.props.SingleGridCellData['profilePic'] ? this.props.SingleGridCellData['profilePic'] : '/images/generic-user-icon.jpg')} 
                alt="" style={thumbNailStyle}>
              <h3 >{this.props.SingleGridCellData['name']}</h3>
              <p>{this.props.SingleGridCellData['position']}</p>
              <a href={"mailto:" + this.props.SingleGridCellData['email']}> {this.props.SingleGridCellData['email']} </a>
            </Thumbnail>
        </div>
      </li>
    )
  }
 }

class ReactExpandableGrid extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      expanded: false,
      selected_id: '',
      gridData: JSON.parse(this.props.gridData)
    }
  }

  handleResize () {
    if (this.state.expanded) {
      var target = document.getElementById(this.state.selected_id)
      this.renderExpandedDetail(target)
    }
    this.makeItMobileFriendly()
  }

  makeItMobileFriendly () {
    var leftPanel = document.getElementById('ExpandedDetail_left')
    var rightPanel = document.getElementById('ExpandedDetail_right')
    if (window.innerWidth < this.props.show_mobile_style_from_width) {
      leftPanel.style.display = 'none'
      rightPanel.style.width = '100%'
    } else {
      leftPanel.style.display = 'block'
      leftPanel.style.width = this.props.ExpandedDetail_left_width
      rightPanel.style.width = this.props.ExpandedDetail_right_width
    }
  }

  componentWillMount () {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount () { }

  renderExpandedDetail (target) {
    var thisId = target.id
    var thisIdNumber = parseInt(thisId.substring(10))
    var detail = document.getElementById('expandedDetail')
    var ol = target.parentNode
    var lengthOfList = parseInt(ol.childNodes.length)
    var startingIndex = thisIdNumber + 1

    var insertedFlag = false

    ol.insertBefore(detail, ol.childNodes[lengthOfList])

    for (var i = startingIndex; i < lengthOfList; i++) {
      console.log(ol.childNodes[i]);
      if (ol.childNodes[i].className === 'SingleGridCell') {


        var difference = ol.childNodes[i].offsetTop - ol.childNodes[thisIdNumber].offsetTop;

        var thisHeight = ol.childNodes[thisIdNumber].clientHeight

        //if (ol.childNodes[i].offsetTop !== ol.childNodes[thisIdNumber].offsetTop) {

        if (difference > thisHeight) {
          ol.childNodes[i].insertAdjacentElement('beforebegin', detail)
          insertedFlag = true
          break
        }
      }
    }

    if (insertedFlag === false) {
      ol.childNodes[lengthOfList - 1].insertAdjacentElement('afterend', detail)
    }

    var cell = document.getElementById(thisId)
    var arrow = document.getElementById('selected_arrow')
    cell.append(arrow)
    arrow.style.display = 'block'
  }

  closeExpandedDetail () {
    this.setState({
      expanded: false,
      selected_id: ''
    }, function afterStateChange () {
      var detail = document.getElementById('expandedDetail')
      detail.style.display = 'none'
      var arrow = document.getElementById('selected_arrow')
      arrow.style.display = 'none'
    })
  }

  handleCellClick (event) {
    var target = event.currentTarget
    var thisIdNumber = parseInt(event.currentTarget.id.substring(10))

    if (this.state.expanded) { // expanded == true
      if (this.state.selected_id === event.currentTarget.id) { // Clicking on already opened detail
        this.closeExpandedDetail()
        this.renderExpandedDetail(target)
      } else { // Clicking on a different thumbnail, when detail is already expanded
        this.setState({
          expanded: true,
          selected_id: event.currentTarget.id
        }, function afterStateChange () {
          var detail = document.getElementById('expandedDetail')
          var description = document.getElementById('ExpandedDetailDescription')
          var title = document.getElementById('ExpandedDetailTitle')
          var img = document.getElementById('ExpandedDetailImage')
          var DescriptionLink = document.getElementById('ExpandedDetailDescriptionLink')
          var DescriptionEmailLink = document.getElementById('ExpandedDetailDescriptionEmailLink')
          var ImageLink = document.getElementById('ExpandedDetailImageLink')
          var subTitle = document.getElementById('ExpandedDetailSubtitle') 
          description.innerHTML = this.state.gridData[thisIdNumber]['bio'] ? this.state.gridData[thisIdNumber]['bio'] : '(No Bio Available)'
          title.innerHTML = this.state.gridData[thisIdNumber]['name']
          subTitle.innerHTML = this.state.gridData[thisIdNumber]['position'] 
          img.src = this.state.gridData[thisIdNumber]['profilePic'] ? this.state.gridData[thisIdNumber]['profilePic'] : 'images/generic-user-icon.jpg'
          DescriptionEmailLink.href = "mailto:" + this.state.gridData[thisIdNumber]['email']
          DescriptionEmailLink.innerHTML = this.state.gridData[thisIdNumber]['email']
          //ImageLink.href = this.state.gridData[thisIdNumber]['email']

          this.renderExpandedDetail(target)

          detail.style.display = 'block'
        })
      }
    } else { // expanded == false
      this.setState({
        expanded: true,
        selected_id: event.currentTarget.id
      }, function afterStateChange () {
        var detail = document.getElementById('expandedDetail')
        var description = document.getElementById('ExpandedDetailDescription')
        var title = document.getElementById('ExpandedDetailTitle')
        var img = document.getElementById('ExpandedDetailImage')
        var DescriptionLink = document.getElementById('ExpandedDetailDescriptionLink')
        var DescriptionEmailLink = document.getElementById('ExpandedDetailDescriptionEmailLink')
        var ImageLink = document.getElementById('ExpandedDetailImageLink')
        var subTitle = document.getElementById('ExpandedDetailSubtitle') 
        description.innerHTML = this.state.gridData[thisIdNumber]['bio'] ? this.state.gridData[thisIdNumber]['bio'] : '(No Bio Available)'
        title.innerHTML = this.state.gridData[thisIdNumber]['name'] 
        subTitle.innerHTML = this.state.gridData[thisIdNumber]['position'] 
        img.src = this.state.gridData[thisIdNumber]['profilePic'] ? this.state.gridData[thisIdNumber]['profilePic'] : 'images/generic-user-icon.jpg'
        DescriptionEmailLink.href = "mailto:" + this.state.gridData[thisIdNumber]['email']
        DescriptionEmailLink.innerHTML = this.state.gridData[thisIdNumber]['email']
        //ImageLink.href = this.state.gridData[thisIdNumber]['email']

        this.renderExpandedDetail(target)

        detail.style.display = 'block'
      })
    }
  }

  generateGrid () {
    var grid = []
    var idCounter = -1 // To help simplify mapping to object array indices. For example, <li> with 0th id corresponds to 0th child of <ol>
    var gridData = this.state.gridData

    for (var i in gridData) {
      idCounter = idCounter + 1
      var thisUniqueKey = 'grid_cell_' + idCounter.toString()
      grid.push(<SingleGridCell handleCellClick={this.handleCellClick.bind(this)} key={thisUniqueKey} id={thisUniqueKey} cellMargin={this.props.cellMargin} SingleGridCellData={gridData[i]} cellSize={this.props.cellSize} cellHeight={this.props.cellHeight} />)
    }

    var cssforExpandedDetail = {
      backgroundColor: this.props.detailBackgroundColor,
      height: this.props.detailHeight,
      display: 'none',
      position: 'relative',
      padding: '20px',
      transition: 'display 2s ease-in-out 0.5s',
      top:40,
    }

    var cssforExpandedDetailImage = {
      display: 'inline-block',
      maxWidth: this.props.ExpandedDetail_image_size,
      width: '100%',
      height: 'auto',
      align: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto'
    }

    var cssforExpandedDetailTitle = {
      backgroundColor: this.props.ExpandedDetail_title_bgColor,
      color: '#006940',
      width: '100%',
      height: 'auto',
      marginBottom: '15px'
    }

    var cssforExpandedDetailDescription = {
      backgroundColor: this.props.ExpandedDetail_description_bgColor,
      color: this.props.ExpandedDetail_font_color,
      width: 'auto%',
      //height: '80%',
      marginRight: '30px',
      marginLeft: '30px',
      textAlign: 'justify'
    }

    var cssforExpandedDetailLeft
    var cssforExpandedDetailRight

    cssforExpandedDetailLeft = {
      width: this.props.ExpandedDetail_left_width,
      height: '100%',
      float: 'left',
      position: 'relative'
    }

    cssforExpandedDetailRight = {
      width: this.props.ExpandedDetail_right_width,
      height: '100%',
      float: 'right',
      position: 'relative'
    }

    var cssForDescriptionLink = {
      textDecoration: 'none',
      cursor: 'pointer',
      position: 'absolute',
      bottom: 0,
    }

    var cssForImageLink = {
      cursor: 'pointer'
    }

    var cssforExpandedDetailClose = {
      textDecoration: 'none',
      position: 'relative',
      float: 'right',
      top: 10,
      right: 10,
      cursor: 'pointer'
    }

    // Make Mobile Friendly
    if (window.innerWidth < this.props.show_mobile_style_from_width) {
      cssforExpandedDetailLeft = {
        width: '0%',
        height: '100%',
        float: 'left',
        position: 'relative',
        display: 'none'
      }

      cssforExpandedDetailRight = {
        width: '100%',
        height: '100%',
        float: 'right',
        position: 'relative'
      }
    }

    var closeX
    if (this.props.ExpandedDetail_closeX_bool) {
      closeX = 'X'
    } else {
      closeX = ''
    }

    grid.push(
      <li style={cssforExpandedDetail} key='expandedDetail' id='expandedDetail'>
        <div id='ExpandedDetail_left'className='ExpandedDetail_left' style={cssforExpandedDetailLeft}>
          <a id='ExpandedDetailImageLink' style={cssForImageLink}>
            <img id='ExpandedDetailImage' className='ExpandedDetailImage' style={cssforExpandedDetailImage} />
          </a>
          <a id='ExpandedDetailDescriptionEmailLink' style={cssForDescriptionLink}> Email </a>
        </div>
        <div id='ExpandedDetail_right' className='ExpandedDetail_right' style={cssforExpandedDetailRight}>
          <div id='ExpandedDetail_close' key='ExpandedDetail_close' style={cssforExpandedDetailClose} onClick={this.closeExpandedDetail.bind(this)}>{closeX}</div>
          <h3 id='ExpandedDetailTitle' className='ExpandedDetailTitle' style={cssforExpandedDetailTitle}> Title </h3>
          <h2 id='ExpandedDetailSubtitle' className='ExpandedDetailSubtitle'>Position </h2>
          <div id='ExpandedDetailDescription' className='ExpandedDetailDescription' style={cssforExpandedDetailDescription}> Some Description</div>
        </div>
      </li>
     )

    return grid
  }

  render () {
    var rows = this.generateGrid()

    var cssForGridDetailExpansion = {
      width: '100%',
      position: 'relative'
    }

    var cssForGridList = {
      listStyle: 'none',
      padding: 0,
      display: 'inline-block'
    }

    var cssForTheGridHolder = {
      width: '100%',
      backgroundColor: this.props.bgColor,
      margin: 0,
      textAlign: 'center'
    }

    var cssForSelectedArrow = {
      width: 0,
      height: 0,
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderBottom: '30px solid' + this.props.detailBackgroundColor,
      marginTop: -15,
      marginLeft: this.props.cellSize / 2 - 20,
      display: 'none'
    }

    return (
      <div id='GridDetailExpansion' style={cssForGridDetailExpansion}>
        <div id='theGridHolder' style={cssForTheGridHolder}>
          <ol id='gridList' style={cssForGridList}>
            {rows}
          </ol>
        </div>
        <div id='selected_arrow' style={cssForSelectedArrow} />
      </div>
    )
  }
}

ReactExpandableGrid.propTypes = {
  gridData: React.PropTypes.string,
  cellSize: React.PropTypes.number,
  cellHeight: React.PropTypes.number,
  cellMargin: React.PropTypes.number,
  bgColor: React.PropTypes.string,
  detailWidth: React.PropTypes.string, // in %
  detailHeight: React.PropTypes.number,
  detailBackgroundColor: React.PropTypes.string,
  ExpandedDetail_right_width: React.PropTypes.string, // in %
  ExpandedDetail_left_width: React.PropTypes.string, // in %
  ExpandedDetail_description_bgColor: React.PropTypes.string,
  ExpandedDetail_title_bgColor: React.PropTypes.string,
  ExpandedDetail_img_bgColor: React.PropTypes.string,
  ExpandedDetail_link_text: React.PropTypes.string,
  ExpandedDetail_font_color: React.PropTypes.string,
  ExpandedDetail_closeX_bool: React.PropTypes.bool,
  show_mobile_style_from_width: React.PropTypes.number
}

var data = [
        {
            "profilePic": "/images/generic-user-icon.jpg", 
            "email": "ramaya2@gmu.edu", 
            "name": "Generic Name Generic Last", 
            "position": "Generic long position",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "profilePic": "/images/generic-user-icon.jpg", 
            "email": "ramaya2@gmu.edu", 
            "name": "Generic Name Generic Last", 
            "position": "Generic long position",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "profilePic": "/images/generic-user-icon.jpg", 
            "email": "ramaya2@gmu.edu", 
            "name": "Generic Name Generic Last", 
            "position": "Generic long position",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]

ReactExpandableGrid.defaultProps = {
  gridData: JSON.stringify(data),
  cellSize: 300,
  cellHeight: 320,
  cellMargin: 25,
  bgColor: '#f2f2f2',
  detailWidth: '100%',
  detailHeight: 300,
  detailBackgroundColor: '#D9D9D9',
  ExpandedDetail_right_width: '60%',
  ExpandedDetail_left_width: '40%',
  ExpandedDetail_image_size: 300,
  ExpandedDetail_description_bgColor: '#D9D9D9',
  ExpandedDetail_title_bgColor: '#D9D9D9',
  ExpandedDetail_img_bgColor: '#D9D9D9',
  ExpandedDetail_link_text: '→ Link',
  ExpandedDetail_font_color: '#434343',
  ExpandedDetail_closeX_bool: true,
  show_mobile_style_from_width: 600,
}

export default ReactExpandableGrid