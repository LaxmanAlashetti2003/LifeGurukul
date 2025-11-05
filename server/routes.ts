import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation request submission
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await storage.createConsultationRequest(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Consultation request submitted successfully",
        data: consultationRequest
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message
        });
      }
      
      console.error("Error creating consultation request:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit consultation request"
      });
    }
  });

  // Get all consultation requests (for admin purposes)
  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getAllConsultationRequests();
      res.json({
        success: true,
        data: requests
      });
    } catch (error: any) {
      console.error("Error fetching consultation requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch consultation requests"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
