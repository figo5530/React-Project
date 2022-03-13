import React, { useState } from 'react'
import score from './data/score-records.csv'
import companies from './data/companies.csv'

function App() {

  const [data, setData] = useState([])
  const [index, setIndex] = useState([])
  const [candidateId, setCandidateId] = useState('')
  const [staff, setStaff] = useState({})

  const handleData = e => {
      fetch(score).then( res => res.text()).then(resText => {
        let temp = resText.split(/\r\n/).slice(1)
        let tempdata = []
        temp.forEach(d => {
            d = d.split(',')
            let obj = {}
            obj['id'] = d[0]
            obj['commnication'] = parseInt(d[1])
            obj['code'] = parseInt(d[2])
            obj['title'] = d[3]
            obj['company'] = d[4]
            tempdata.push(obj)
        })
      setData(tempdata)
      })
      fetch(companies).then(res => res.text()).then(resText => {
        let temp = resText.split(/\r\n/).slice(1)
        let tempIndex = []
        temp.forEach(d => {
          d = d.split(',')
          let obj = {}
          obj['companyId'] = d[0]
          obj['index'] = parseFloat(d[1])
          tempIndex.push(obj)
        })
        setIndex(tempIndex)
      })
  }

  const handleChange = e => {
      setCandidateId(e.target.value)
  }

  const hanldeSubmit = e => {
      e.preventDefault()
      let person = data.filter(d => d.id === candidateId)[0]
      if(person) {
        setStaff({
          id: person.id,
          commnication: person.commnication,
          code: person.code,
          title: person.title,
          company: person.company
        })
      }else {
        //alert
        console.log("Couldn't find the candidate")
      }
      
      //get companyId and title
      let targetIndex = 0
      for(let i = 0; i < index.length; i++) {
        if(index[i].companyId === person.company) {
          targetIndex = index[i].index
          break
        }
      }
      let similiarCompanies = index.filter(c => Math.abs(c.index - targetIndex) < 0.15)
      similiarCompanies = similiarCompanies.map(c => c.companyId)
      console.log(similiarCompanies)

      let title = person.title
      //create dataset using title and companyId
      //percentile = number of values below target / total number of the values * 100
      let total = 0, communicationBelow = 0, codeBelow = 0
      for(let i = 0; i < data.length; i++) {
        
        if(data[i].title === title && similiarCompanies.includes(data[i].company)) {
          //matching total
          total++
          //communication score below
          if(data[i].commnication <= person.commnication) communicationBelow++
          if(data[i].code <= person.code) codeBelow++
        }
      }
      //minus self
      let communicationPercentile = (communicationBelow - 1) / total *100
      let codePercentile = (codeBelow - 1) / total * 100
      console.log(communicationPercentile, codePercentile, total)
  }

  return (
      <>
      <button onClick={handleData}>Load File</button>
      {/* {console.log(data)} */}
      {/* {console.log(index)} */}
      <p></p>
      <form onSubmit={hanldeSubmit}>
          <input type='text' 
          onChange={handleChange}
          value={candidateId} 
          placeholder="Input the candidate ID"
          />
          <p></p>
          <input type='submit' value='submit'/>
      </form>
      
      
      <p>The candidate you're viewing is: {staff.id ? staff.id : 'Please load the file first'}</p>
      <p>The candidate's comminucation score is: {staff.commnication ? staff.commnication : 'Please load the file first'}</p>
      <p>The candidate's coding score is: {staff.code ? staff.code : 'Please load the file first'}</p>
      <p>The candidate's title is: {staff.title ? staff.title : 'Please load the file first'}</p>
      <p>The candidate works at company: {staff.company ? staff.company : 'Please load the file first'}</p>
      <p>The candidate works at company: {staff.company ? staff.company : 'Please load the file first'}</p>
      <p>The candidate works at company: {staff.company ? staff.company : 'Please load the file first'}</p>
      </>
  )
}
  
export default App;