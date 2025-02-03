import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { CLIENT_RENEG_LIMIT } from "tls";

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error: any) {
    res.status(500).json({
      message: `Error retrieving projects: ${error.message}`,
    });
    console.error(`Error retrieving projects: ${error.message}`);
  }
};

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, startDate, endDate } = req.body;

  console.log(req.body);

  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
      },
    });

    console.log("newProject:",newProject);

    res.status(201).json(newProject);

  } catch (error: any) {
    console.error(`Error creating a project: ${error.message}`);
    res.status(500).json({
      message: `Error creating a project: ${error.message}`,
    });
  }
};
