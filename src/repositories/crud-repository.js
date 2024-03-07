const express = require("express");

class CrudRepo {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }
}

module.exports = CrudRepo;
