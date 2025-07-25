import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pickup: {
    type: String,
    required: true
  },
  dropoff: {
    type: String,
    required: true
  },
  startLocation: {
    lat: Number,
    lng: Number
  },
  endLocation: {
    lat: Number,
    lng: Number
  },
  driverLocation: {
    lat: Number,
    lng: Number
  },
  distance: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  fare: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'cancelled', 'scheduled','accepted'],
    default: 'pending'
  },
  scheduledTime: {
    type: Date 
  },
  steps: [{
    distance: { text: String, value: Number },
    duration: { text: String, value: Number },
    end_location: { lat: Number, lng: Number },
    html_instructions: String,
    polyline: {
      points: String
    },
    start_location: { lat: Number, lng: Number },
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

rideSchema.index({ userId: 1 });
rideSchema.index({ status: 1 });
rideSchema.index({ scheduledTime: 1 });
rideSchema.index({ createdAt: 1 });

const Ride = mongoose.model('Ride', rideSchema);

export default Ride;