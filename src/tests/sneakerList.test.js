import React from "react"
import { render, screen, within } from "@testing-library/react"
import SneakersList from '../components/sneakersList'

it("should render a list of 10 shoues", () => {
  render(<SneakersList />)
  const list = screen.getByRole("shoues_list")
  const { getAllByRole } = within(list)
  const items = getAllByRole("shoues_list_item")
  expect(items.length).toBe(10)
})