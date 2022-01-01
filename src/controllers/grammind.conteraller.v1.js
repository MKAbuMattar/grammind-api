import grammindModle from '../models'

export const readGrammind = async (req, res, next) => {
  const numOfQueries = Object.keys(req.query).length

  if (numOfQueries === 0) {
    grammindModle.find({}, (err, data) => {
      if (err) {
        res.status(401).json({
          errors: err,
        })
      } else {
        let spaces = data.spaces || 2

        if (!res.get('Content-Type')) {
          res.set('Content-Type', 'application/json')
        }

        res.status(200).send(
          JSON.stringify(
            {
              success: true,
              totalCount: data.length,
              data: data,
            },
            null,
            spaces,
          ),
        )

        next()
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
              if (result.pattern_no.toLowerCase() === `${pattern_no}`.toLowerCase())
                resultData.push(result)
            })
            data = resultData
            success = true
            resultData = []
            break
          case 'type':
            data.forEach((result) => {
              if (result.type.toLowerCase() === `${type}`.toLowerCase()) resultData.push(result)
            })
            data = resultData
            success = true
            resultData = []
            break
          case 'programing_language':
            data.forEach((result) => {
              if (
                result.programing_language.toLowerCase() === `${programing_language}`.toLowerCase()
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
        let spaces = patterns.spaces || 2

        if (!res.get('Content-Type')) {
          res.set('Content-Type', 'application/json')
        }

        res.status(200).send(
          JSON.stringify(
            {
              success: success,
              totalCount: patterns.length,
              resultCount: data.length,
              data: data,
            },
            null,
            spaces,
          ),
        )

        next()
      }
    })
  }
}

export const getBySlugGrammind = async (req, res, next) => {
  const slug = req.params.slug

  grammindModle.find({ slug: slug }, (err, patterns) => {
    if (err) {
      return res.status(401).json({
        success: false,
        errors: err,
      })
    }

    let spaces = patterns.spaces || 2

    if (!res.get('Content-Type')) {
      res.set('Content-Type', 'application/json')
    }

    res.status(200).send(
      JSON.stringify(
        {
          success: true,
          resultCount: patterns.length,
          data: patterns,
        },
        null,
        spaces,
      ),
    )

    next()
  })
}

export const getByLanguageGrammind = async (req, res, next) => {
  const language = req.params.language

  grammindModle.find({ programing_language: language }, (err, patterns) => {
    if (err) {
      return res.status(401).json({
        success: false,
        errors: err,
      })
    }

    let spaces = patterns.spaces || 2

    if (!res.get('Content-Type')) {
      res.set('Content-Type', 'application/json')
    }

    res.status(200).send(
      JSON.stringify(
        {
          success: true,
          resultCount: patterns.length,
          data: patterns,
        },
        null,
        spaces,
      ),
    )

    next()
  })
}

export const getByLanguageAndTypeGrammind = async (req, res, next) => {
  const language = req.params.language
  const type = req.params.type

  grammindModle.find({ programing_language: language, type: type }, (err, patterns) => {
    if (err) {
      return res.status(401).json({
        success: false,
        errors: err,
      })
    }

    let spaces = patterns.spaces || 2

    if (!res.get('Content-Type')) {
      res.set('Content-Type', 'application/json')
    }

    res.status(200).send(
      JSON.stringify(
        {
          success: true,
          resultCount: patterns.length,
          data: patterns,
        },
        null,
        spaces,
      ),
    )

    next()
  })
}

export const getByLanguageAndNoGrammind = async (req, res, next) => {
  const language = req.params.language
  const pattern_no = req.params.pattern_no

  grammindModle.find({ programing_language: language, pattern_no: pattern_no }, (err, patterns) => {
    if (err) {
      return res.status(401).json({
        success: false,
        errors: err,
      })
    }

    let spaces = patterns.spaces || 2

    if (!res.get('Content-Type')) {
      res.set('Content-Type', 'application/json')
    }

    res.status(200).send(
      JSON.stringify(
        {
          success: true,
          resultCount: patterns.length,
          data: patterns,
        },
        null,
        spaces,
      ),
    )

    next()
  })
}

export default {
  readGrammind,
  getBySlugGrammind,
  getByLanguageGrammind,
  getByLanguageAndTypeGrammind,
  getByLanguageAndNoGrammind,
}
