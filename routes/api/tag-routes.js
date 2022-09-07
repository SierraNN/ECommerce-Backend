const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint 

router.get('/', (req, res) => {
    // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
  .then((tag) => res.json(tag))
  .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
  .then((tag) => res.json(tag))
  .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
    // create a new tag
  Tag.create(req.body)
  .then((tag) => res.json(tag))
  .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => res.json(tag))
  .catch((err) => res.json(err));
});
  // update a tag's name by its `id` value
  
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.json(tag))
    .catch((err) => res.json(err));
});

module.exports = router;
