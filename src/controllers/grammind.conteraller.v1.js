import grammindModle from '../models/grammind.model'

export const readGrammind = async (req, res) => {
  const numOfQueries = Object.keys(req.query).length

  if (numOfQueries === 0) {
    grammindModle.find({}, (err, data) => {
      if (err) {
        res.status(401).json({
          errors: err,
        })
      } else {
        res.status(200).json({
          success: true,
          totalCount: data.length,
          data: data,
        })
      }
    })
  } else {
    const queryObj = req.query

    const { pattern, pattern_no, type, programing_language } = queryObj

    grammindModle.find({}, (err, patterns) => {
      let data = patterns
      let resultData = []
      let success = false

      for (const key in queryObj) {
        switch (key) {
          case 'pattern':
            data.forEach((result) => {
              if (result.pattern.toLowerCase() === `${pattern}`.toLowerCase())
                resultData.push(result)
            })
            data = resultData
            success = true
            resultData = []
            break
          case 'pattern_no':
            data.forEach((result) => {
              if (
                result.pattern_no.toLowerCase() ===
                `${pattern_no}`.toLowerCase()
              )
                resultData.push(result)
            })
            data = resultData
            success = true
            resultData = []
            break
          case 'type':
            data.forEach((result) => {
              if (result.type.toLowerCase() === `${type}`.toLowerCase())
                resultData.push(result)
            })
            data = resultData
            success = true
            resultData = []
            break
          case 'programing_language':
            data.forEach((result) => {
              if (
                result.programing_language.toLowerCase() ===
                `${programing_language}`.toLowerCase()
              )
                resultData.push(result)
            })
            data = resultData
            success = true
            resultData = []
            break
          default:
            success = false
            data = resultData
            resultData = []
            break
        }
      }

      if (err) {
        res.status(401).json({
          errors: err,
        })
      } else {
        res.status(200).json({
          success: success,
          totalCount: patterns.length,
          resultCount: data.length,
          data: data,
        })
      }
    })
  }
}

export const getBySlugGrammind = async (req, res) => {
  const slug = req.params.slug

  grammindModle.find({ slug: slug }, (err, patterns) => {
    if (err) {
      return res.status(401).json({
        success: false,
        errors: err,
      })
    }
    res.status(200).json({
      success: true,
      resultCount: patterns.length,
      data: patterns,
    })
  })
}
