// points in fingure:

const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFingure: [0, 5, 6, 7, 8],
  middleFingure: [0, 9, 10, 11, 12],
  ringFingure: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

// drawing function
export const drawHand = (predictions, ctx) => {
  //check if we have predictions
  if (predictions.length > 0) {
    //loop through each prediction
    predictions.forEach((prediction) => {
      //grab landmarks
      const landmarks = prediction.landmarks;

      // Loop through fingers
      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        let finger = Object.keys(fingerJoints)[j];
        //  Loop through pairs of joints
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          // Get pairs of joints
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          // Draw path
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "plum";
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }
      // loop through ladmarks and draw  them
      for (let i = 0; i < landmarks.length; i++) {
        //get x point
        const x = landmarks[i][0];
        //get y point
        const y = landmarks[i][1];
        //start drawing
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        // Set line colour
        ctx.fillStyle = "red";
        ctx.fill();
      }
      // loop through draw onnecting lines:
    });
  }
};
