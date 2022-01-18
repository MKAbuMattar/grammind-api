import grammindModle from '../models'
import { getPaginationParams } from '../utils'

export const getAllGrammind = async (req, res, next) => {
  try {
    const { limit, skip, page } = getPaginationParams(req.query)

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

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
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

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
  } catch (error) {
    return next(error)
  }
}

export const getByTypeGrammind = async (req, res, next) => {
  try {
    const { type } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle.find({ type }).sort({ createdAt: 1 }).limit(limit).skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
  } catch (error) {
    return next(error)
  }
}

export const getByPatternGrammind = async (req, res, next) => {
  try {
    const { pattern } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle.find({ pattern }).sort({ createdAt: 1 }).limit(limit).skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
  } catch (error) {
    return next(error)
  }
}

export const getByNoGrammind = async (req, res, next) => {
  try {
    const { pattern_no } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle.find({ pattern_no }).sort({ createdAt: 1 }).limit(limit).skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
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

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
  } catch (error) {
    return next(error)
  }
}

export const getByLanguageAndPatternGrammind = async (req, res, next) => {
  try {
    const { language } = req.params
    const { pattern } = req.params

    const { limit, skip, page } = getPaginationParams(req.query)

    const [results, totalCount] = await Promise.all([
      grammindModle
        .find({ programing_language: language, pattern })
        .sort({ createdAt: 1 })
        .limit(limit)
        .skip(skip),

      grammindModle.countDocuments(),
    ])

    const lastItemIndex = skip + results.length

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
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

    const totalPages = Math.ceil(results.length / limit)

    res.status(200).json({
      count: results.length,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    })
  } catch (error) {
    return next(error)
  }
}

export default {
  getAllGrammind,
  getBySlugGrammind,
  getByLanguageGrammind,
  getByTypeGrammind,
  getByPatternGrammind,
  getByNoGrammind,
  getByLanguageAndTypeGrammind,
  getByLanguageAndPatternGrammind,
  getByLanguageAndNoGrammind,
}
