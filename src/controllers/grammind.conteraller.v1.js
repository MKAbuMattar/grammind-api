import grammindModle from '../models'
import { getPaginationParams } from '../utils'

export const getAllGrammind = async (req, res, next) => {
  try {
    const { limit, skip, page } = getPaginationParams(req.query)

    const numOfQueries = Object.keys(req.query).filter(
      (e) => e === 'pattern' || e === 'pattern_no' || e === 'type' || e === 'programing_language',
    ).length

    if (numOfQueries === 0) {
      const [results, totalCount] = await Promise.all([
        grammindModle.find({}).sort({ createdAt: 1 }).limit(limit).skip(skip),

        grammindModle.countDocuments(),
      ])

      const lastItemIndex = skip + results.length

      const totalPages = Math.ceil(totalCount / limit)

      const spaces = results.spaces || 2

      if (!res.get('Content-Type')) {
        res.set('Content-Type', 'application/json')
      }

      res.status(200).send(
        JSON.stringify(
          {
            count: results.length,
            totalCount,
            page,
            totalPages,
            lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
            data: results,
          },
          null,
          spaces,
        ),
      )

      next()
    } else {
      const queryObj = req.query

      const { pattern, pattern_no, type, programing_language } = queryObj

      const [results, totalCount] = await Promise.all([
        grammindModle.find({}).sort({ createdAt: 1 }).limit(limit).skip(skip),

        grammindModle.countDocuments(),
      ])

      let data = results
      let resultData = []

      for (const key in queryObj) {
        switch (key) {
          case 'pattern':
            data.forEach((result) => {
              if (result.pattern.toLowerCase() === `${pattern}`.toLowerCase())
                resultData.push(result)
            })
            data = resultData
            resultData = []
            break
          case 'pattern_no':
            data.forEach((result) => {
              if (result.pattern_no.toLowerCase() === `${pattern_no}`.toLowerCase())
                resultData.push(result)
            })
            data = resultData
            resultData = []
            break
          case 'type':
            data.forEach((result) => {
              if (result.type.toLowerCase() === `${type}`.toLowerCase()) resultData.push(result)
            })
            data = resultData
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
            resultData = []
            break
          default:
            break
        }
      }

      const lastItemIndex = skip + data.length

      const totalPages = Math.ceil(data.length / limit)

      const spaces = data.spaces || 2

      if (!res.get('Content-Type')) {
        res.set('Content-Type', 'application/json')
      }

      res.status(200).send(
        JSON.stringify(
          {
            count: data.length,
            totalCount,
            page,
            totalPages,
            lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
            data: data,
          },
          null,
          spaces,
        ),
      )

      next()
    }
  } catch (error) {
    return next(error)
  }
}

export const getBySlugGrammind = async (req, res, next) => {
  try {
    const { slug } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle.find({ slug }).sort({ createdAt: 1 }).limit(limit).skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(totalCount / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })

    next()
  } catch (error) {
    return next(error)
  }
}

export const getByLanguageGrammind = async (req, res, next) => {
  try {
    const { language } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle
        .find({ programing_language: language })
        .sort({ createdAt: 1 })
        .limit(limit)
        .skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(totalCount / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })

    next()
  } catch (error) {
    return next(error)
  }
}

export const getByLanguageAndTypeGrammind = async (req, res, next) => {
  try {
    const { language } = req.params
    const { type } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle
        .find({ programing_language: language, type })
        .sort({ createdAt: 1 })
        .limit(limit)
        .skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(totalCount / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })

    next()
  } catch (error) {
    return next(error)
  }
}

export const getByLanguageAndNoGrammind = async (req, res, next) => {
  try {
    const { language } = req.params
    const { pattern_no } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle
        .find({ programing_language: language, pattern_no })
        .sort({ createdAt: 1 })
        .limit(limit)
        .skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(totalCount / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })

    next()
  } catch (error) {
    return next(error)
  }
}

export default {
  getAllGrammind,
  getBySlugGrammind,
  getByLanguageGrammind,
  getByLanguageAndTypeGrammind,
  getByLanguageAndNoGrammind,
}
