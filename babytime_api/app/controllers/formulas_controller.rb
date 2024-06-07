class FormulasController < ApplicationController
    before_action :authenticate_user!
    # before_action :current_activity
    
      
    
        def new
            @formula = Formula.new
        end
    
        def create
            @formula = Formula.new params.require(:formula)
            .permit(
              :title,
              :duration,
              :note
            )
            @formula.activity = Activity.find_by_user_id(@current_user)
            if @formula.save
                flash[:success] = "Answer successfully created"
                 redirect_to @formula
            end
        end
    
        def show
         
            @formula = Formula.find params[:id]
            if @formula.activity.user != current_user
                redirect_to activities_path
            end
        end
    
        def edit
            @formula = Formula.find params[:id]
            if @formula.activity.user != current_user
                redirect_to activities_path
            end
        end
    
        def update
            @formula = Formula.find params[:id]
            if @formula.update(formula_params)
                flash[:success] = "Question successfully updated"
                redirect_to @formula
                # redirect_to question_path(@question)
                # ^^older syntax
              else
                flash[:error] = "Something went wrong"
                render :edit, status: 303 
            end
        end
    
        def destroy
            @formula = Formula.find params[:id]
            @formula.destroy
            redirect_to activities_path
          end
    
    
    private
    def formula_params
        params.require(:formula).permit(:amount, :note)
      end
end
